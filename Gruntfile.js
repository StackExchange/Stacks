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
            production: {
                files: {
                    'docs/assets/css/stacks-documentation.css': 'docs/assets/less/stacks-documentation.less',
                    'lib/css/dist/stacks.css': 'lib/css/src/stacks.less',
                }
            },
            partials: {
                // these files are immediately deleted because we don't distribute them directly, but we must ensure
                // that they compile (e.g. if a static file accidentally accesses the dynamic options, the full bundle will compile
                // fine, but stacks-static alone will blow up)
                files: {
                    'lib/css/dist/stacks-static.css': 'lib/css/src/stacks-static.less',
                    'lib/css/dist/stacks-dynamic.css': 'lib/css/src/stacks-dynamic.less',
                }
            }
        },
        // Minify our compiled CSS
        cssmin: {
            production: {
                files: {
                    'docs/assets/css/stacks-documentation.min.css': 'docs/assets/css/stacks-documentation.css',
                    'lib/css/dist/stacks.min.css': 'lib/css/dist/stacks.css',
                }
            }
        },
        // Minify and concatenate JS
        uglify: {
            production: {
                files: {
                    'lib/js/dist/stacks.min.js': [
                        'node_modules/stimulus/dist/stimulus.umd.js',
                        'lib/js/src/stacks.js',
                        'lib/js/src/controllers/**/*.js'
                    ],
                    'docs/assets/js/stacks.min.js': [
                        'node_modules/stimulus/dist/stimulus.umd.js',
                        'lib/js/src/stacks.js',
                        'lib/js/src/controllers/**/*.js'
                    ],
                }
            }
        },
        // Watch for files to change and run tasks when they do
        watch: {
            less: {
                files: ['lib/**/*.less', 'docs/**/*.less'],
                tasks: ['less:production']
            },
            css: {
                files: ['docs/assets/css/stacks-documentation.css', 'lib/css/dist/stacks.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['lib/**/*.js'],
                tasks: ['uglify:production']
            },
        },
        // Run tasks in parallel
        concurrent: {
            serve: [
                'less:production',
                'watch:less',
                'cssmin',
                'watch:css',
                'uglify:production',
                'watch:js',
                'shell:jekyllServe',
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        // Clean the icons directory to prepare for copying from the node dependency
        clean: {
            icons: ['docs/product/resources/svg-icons/'],
            partials: ['lib/css/stacks-static.css', 'lib/css/stacks-dynamic.css'],
        },
        // Copy files out of node_modules so Jekyll can use them
        copy: {
            svgs: {
                expand: true,
                cwd: 'node_modules/@stackoverflow/stacks-icons/build/lib',
                src: '**',
                dest: 'docs/product/resources/svg-icons/',
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task
    grunt.registerTask('default', ['concurrent:serve']);
    grunt.registerTask('build', ['less:production', 'less:partials', 'clean:partials', 'cssmin']);
    grunt.registerTask('update-icons', ['clean:icons', 'copy']);
};
