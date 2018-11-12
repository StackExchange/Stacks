'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'docs'
                    }
                }
            },
            jekyllServe: {
                command: 'bundle exec jekyll serve',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'docs'
                    }
                }
            }
        },
        // Less compilation
        less: {
            stacks: {
                files: {
                    'lib/css/dist/stacks.css': 'lib/css/src/stacks.less'
                }
            },
            // note that the docs CSS includes the full Stacks
            docs: {
                files: {
                    'docs/assets/css/stacks-documentation.css': 'docs/assets/less/stacks-documentation.less'
                }
            },
            stacks_partials: {
                // these files are immediately deleted because we don't distribute them directly, but we must ensure
                // that they compile (e.g. if a static file accidentally accesses the dynamic options, the full bundle will compile
                // fine, but stacks-static alone will blow up)
                files: {
                    'lib/css/tmp/stacks-static.css': 'lib/css/src/stacks-static.less',
                    'lib/css/tmp/stacks-dynamic.css': 'lib/css/src/stacks-dynamic.less',
                }
            }
        },
        // Minify our compiled CSS
        cssmin: {
            stacks: {
                files: {
                    'lib/css/dist/stacks.min.css': 'lib/css/dist/stacks.css'
                }
            },
            docs: {
                files: {
                    'docs/assets/css/stacks-documentation.min.css': 'docs/assets/css/stacks-documentation.css'
                }
            }
        },
        rollup: {
            options: {
                plugins: [require('rollup-plugin-node-resolve')(), require('rollup-plugin-commonjs')()],
                format: 'iife'
            },
            stacks_js_polyfills: {
                files: {
                    'lib/js/dist/stacks.polyfills.js': ['lib/js/src/stacks.polyfills.js']
                }
            }
        },
        // Minify and concatenate JS
        uglify: {
            stacks_js: {
                files: {
                    'lib/js/dist/stacks.min.js': ['lib/js/dist/stacks.js']
                }
            },
            stacks_js_polyfills: {
                files: {
                    'lib/js/dist/stacks.polyfills.min.js': ['lib/js/dist/stacks.polyfills.js']
                }
            },
        },
        concat: {
            stacks_js: {
                options: {
                    separator: '\n\n;\n\n'
                },
                files: {
                    'lib/js/dist/stacks.js': [
                        'node_modules/stimulus/dist/stimulus.umd.js',
                        'lib/js/src/stacks.js',
                        'lib/js/src/controllers/**/*.js'
                    ]
                }
            }
        },
        // Watch for files to change and run tasks when they do
        watch: {
            // If any Stacks LESS file changes, both the Stacks CSS and the docs CSS have to be
            // recompiled, because that latter @imports the Stacks LESS.
            stacks_less: {
                files: ['lib/css/src/**/*.less'],
                tasks: ['concurrent:compile_stacks_css']
            },

            // On the other hand, a change to docs .less only requires recompilation of the docs CSS
            docs_less: {
                files: ['docs/**/*.less', '!docs/_site/**'],
                tasks: ['less:docs', 'cssmin:docs']
            },

            stacks_js: {
                files: ['lib/js/src/**/*.js'], // note: this doesn't watch any of the npm dependencies
                tasks: ['concurrent:compile_stacks_js', 'copy:js2docs']
            }
        },
        // Run tasks in parallel
        concurrent: {
            options: {
                logConcurrentOutput: true
            },

            serve: [
                'watch',
                'shell:jekyllServe'
            ],

            // CSS and JS compilation don't impact each other, thus can run in parallel
            compile: [
                'concurrent:compile_stacks_css',
                ['concurrent:compile_stacks_js', 'copy:js2docs']
            ],

            // Stacks JS itself and the polyfills are independent of each other, so they can be compiled in parallel
            compile_stacks_js: [
                ['concat:stacks_js', 'uglify:stacks_js'],
                ['rollup:stacks_js_polyfills', 'uglify:stacks_js_polyfills']
            ],

            // the actual stacks, the docs CSS (which also includes Stacks, but via a LESS @import), and the partials
            // can be compiled in parallel as well
            compile_stacks_css: [
                ['less:stacks', 'cssmin:stacks'],
                ['less:stacks_partials', 'clean:stacks_partials'],
                ['less:docs', 'cssmin:docs']
            ]
        },

        clean: {
            // Clean the icons directory to prepare for copying from the node dependency
            icons: ['docs/product/resources/svg-icons/'],

            // Clean-up the partial CSS files created in less:stacks_partials to ensure that
            // dynamic and static part compile independently of each other
            stacks_partials: ['lib/css/tmp']
        },

        copy: {
            // copy the compiled JS files into the Jekyll source
            js2docs: {
                src: 'lib/js/dist/*.js',
                dest: 'docs/assets/js/',
                flatten: true,
                expand: true
            },

            // Copy files out of node_modules so Jekyll can use them
            svgs: {
                expand: true,
                cwd: 'node_modules/@stackoverflow/stacks-icons/build/lib',
                src: '**',
                dest: 'docs/_includes/svg-icons/',
                filter: 'isFile',
            },
            data: {
                expand: true,
                cwd: 'node_modules/@stackoverflow/stacks-icons/build',
                src: 'icons.yml',
                dest: 'docs/_data/product/',
                filter: 'isFile',
            },
        },
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rollup');

    // Default task
    grunt.registerTask('default',
        'Compile all JS and LESS files and rebuild the documentation site, then continue running and re-compile as needed whenever files are changed.',
        ['concurrent:compile', 'concurrent:serve']);

    grunt.registerTask('build',
        'Compile all JS and LESS files and rebuild the documentation site.',
        ['concurrent:compile', 'shell:jekyllBuild']);

    grunt.registerTask('update-icons', ['clean:icons', 'copy:svgs', 'copy:data']);

};
