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
                    'lib/css/stacks.css': 'lib/src/stacks.less',
                }
            },
            partials: {
                // these files are immediately deleted because we don't distribute them directly, but we must ensure
                // that they compile (e.g. if a static file accidentally accesses the dynamic options, the full bundle will compile
                // fine, but stacks-static alone will blow up)
                files: {
                    'lib/css/stacks-static.css': 'lib/src/stacks-static.less',
                    'lib/css/stacks-dynamic.css': 'lib/src/stacks-dynamic.less',
                }
            }
        },
        // Minify our compiled CSS
        cssmin: {
            production: {
                files: {
                    'docs/assets/css/stacks-documentation.min.css': 'docs/assets/css/stacks-documentation.css',
                    'lib/css/stacks.min.css': 'lib/css/stacks.css',
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
                files: ['docs/assets/css/stacks-documentation.css', 'lib/css/stacks.css'],
                tasks: ['cssmin']
            }
        },
        // Run tasks in parallel
        concurrent: {
            serve: [
                'less:production',
                'watch:less',
                'cssmin',
                'watch:css',
                'shell:jekyllServe',
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        // Clean the icons directory to prepare for copying from the node dependency
        clean: {
            icons: ['docs/resources/svg-icons/'],
            partials: ['lib/css/stacks-static.css', 'lib/css/stacks-dynamic.css'],
        },
        // Copy files out of node_modules so Jekyll can use them
        copy: {
            svgs: {
                expand: true,
                cwd: 'node_modules/@stackoverflow/stacks-icons/build/lib',
                src: '**',
                dest: 'docs/resources/svg-icons/',
                filter: 'isFile',
            },
            data: {
                expand: true,
                cwd: 'node_modules/@stackoverflow/stacks-icons/build',
                src: 'icons.yml',
                dest: 'docs/_data/',
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

    // Default task
    grunt.registerTask('default', ['concurrent:serve']);
    grunt.registerTask('build', ['less:production', 'less:partials', 'clean:partials', 'cssmin']);
    grunt.registerTask('update-icons', ['clean:icons', 'copy']);
};
