'use strict';

module.exports = function (grunt) {
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
                options: {
                    paths: ['docs/assets/less']
                },
                files: {
                    'docs/assets/css/stacks.css': 'docs/assets/less/stacks.less'
                }
            },
        },
        // Minify our compiled CSS
        cssmin: {
            production: {
                files: {
                    'docs/assets/css/stacks.min.css': 'docs/assets/css/stacks.css'
                }
            }
        },
        // Watch for files to change and run tasks when they do
        watch: {
            less: {
                files: ['lib/**/*.less', 'docs/assets/less/*.less'],
                tasks: ['less']
            },
            css: {
                files: ['docs/assets/css/stacks.css'],
                tasks: ['cssmin']
            }
        },
        // Run tasks in parallel
        concurrent: {
            serve: [
                'less',
                'watch:less',
                'cssmin',
                'watch:css',
                'shell:jekyllServe',
            ],
            options: {
                logConcurrentOutput: true
            }
        },
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['concurrent:serve']);
};