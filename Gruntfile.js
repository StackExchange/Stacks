'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'docs'
                    }
                }
            },
            jekyllServe: {
                command: 'jekyll serve',
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
            postcss: {
                files: ['lib/**/*.less'],
                tasks: ['postcss'],
            },
            less: {
                files: ['lib/**/*.less', 'docs/**/*.less'],
                tasks: ['less']
            },
            css: {
                files: ['docs/assets/css/stacks-documentation.css', 'lib/css/stacks.css'],
                tasks: ['cssmin']
            }
        },
        // Run tasks in parallel
        concurrent: {
            serve: [
                'postcss',
                'watch:postcss',
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
        // Clean the icons directory to prepare for copying from the node dependency
        clean: {
            icons: ['docs/resources/svg-icons/'],
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
        postcss: {
            // Add sorting directly to Less files
            options: {
                syntax: require('postcss-less'),
                processors: [
                    require('postcss-sorting')({
                        'properties-order': [
                            'content',
                            'box-sizing',
                            'display',
                            'visibility',
                            'position',
                            'float',
                            'clear',
                            'flex-direction',
                            'order',
                            'flex',
                            'flex-grow',
                            'flex-wrap',
                            'flex-shrink',
                            'flex-flow',
                            'flex-basis',
                            'justify-content',
                            'align-content',
                            'align-items',
                            'align-self',
                            'top',
                            'right',
                            'bottom',
                            'left',
                            'width',
                            'height',
                            'min-width',
                            'min-height',
                            'max-width',
                            'max-height',
                            'overflow',
                            'overflow-x',
                            'overflow-y',
                            'margin',
                            'margin-top',
                            'margin-right',
                            'margin-bottom',
                            'margin-left',
                            'padding',
                            'padding-top',
                            'padding-right',
                            'padding-bottom',
                            'padding-left',
                            'z-index',
                            'clip-path',
                            'opacity',
                            'border-collapse',
                            'border-spacing',
                            'border',
                            'border-color',
                            'border-top-color',
                            'border-right-color',
                            'border-bottom-color',
                            'border-left-color',
                            'border-style',
                            'border-top-style',
                            'border-right-style',
                            'border-bottom-style',
                            'border-left-style',
                            'border-width',
                            'border-top-width',
                            'border-right-width',
                            'border-bottom-width',
                            'border-left-width',
                            'border-top',
                            'border-right',
                            'border-bottom',
                            'border-left',
                            'border-radius',
                            'border-top-left-radius',
                            'border-top-right-radius',
                            'border-bottom-left-radius',
                            'border-bottom-right-radius',
                            'outline',
                            'background',
                            'background-color',
                            'background-repeat',
                            'background-size',
                            'box-shadow',
                            'color',
                            'font',
                            'font-family',
                            'font-size',
                            'font-weight',
                            'font-style',
                            'text-align',
                            'text-transform',
                            'text-decoration',
                            'text-overflow',
                            'line-height',
                            'vertical-align',
                            'white-space',
                            'animation',
                            'transform',
                            'transform-origin',
                            'transition',
                            'transition-delay',
                            'transition-duration',
                            'transition-property',
                            'transition-timing-function',
                            'will-change',
                            'touch-action',
                            'pointer-events',
                            'user-inpute',
                            'cursor'
                        ],
                        'unspecified-properties-position': 'bottom',
                    }),
                ]
            },
            dist: {
                src: 'lib/**/*.less'
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-postcss');

    // Default task
    grunt.registerTask('default', ['concurrent:serve']);
    grunt.registerTask('build', ['less', 'cssmin']);
    grunt.registerTask('update-icons', ['clean', 'copy']);
    grunt.registerTask('process-css', ['postcss']);
};
