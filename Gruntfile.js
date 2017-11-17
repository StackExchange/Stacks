'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },
        // Less compilation
        less: {
            production: {
                options: {
                    paths: ['assets/less']
                },
                files: {
                    'assets/css/stacks.css': 'assets/less/stacks.less'
                }
            },
        },
        // Watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['assets/less/*.less'],
                tasks: ['less']
            }
        },
        // Run tasks in parallel
        concurrent: {
            serve: [
                'less',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['concurrent:serve']);
};