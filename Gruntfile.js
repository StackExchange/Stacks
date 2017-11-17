'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },
        less: {
            development: {
                options: {
                    paths: ['assets/less']
                },
                files: {
                    'assets/css/stacks.css': 'assets/less/stacks.less'
                }
            },
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['shell:jekyllServe']);
    grunt.registerTask('build', ['less']);
};