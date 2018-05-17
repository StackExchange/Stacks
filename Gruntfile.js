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
            postcss: {
                files: ['lib/**/*.less'],
                tasks: ['postcss:autoprefixing','postcss:sorting'],
            },
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
                'postcss:autoprefixing',
                'postcss:sorting',
                'watch:postcss',
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
        postcss: {
            // Add sorting directly to Less files
            sorting: {
                options: {
                    syntax: require('postcss-less'),
                    processors: [
                        require('postcss-sorting')({
                            'properties-order': [
                                'content',
                                'counter-increment',
                                'counter-reset',
                                'list-style',
                                'list-style-image',
                                'list-style-position',
                                'list-style-type',
                                'quotes',
                                'display',
                                'overflow',
                                'overflow-x',
                                'overflow-y',
                                'visibility',
                                'clip',
                                'clip-path',
                                'position',
                                'z-index',
                                'top',
                                'right',
                                'bottom',
                                'left',
                                'clear',
                                'float',
                                'box-flex',
                                'flex',
                                'flex-preferred-size',
                                'flex-basis',
                                'box-direction',
                                'box-orient',
                                'flex-direction',
                                'flex-flow',
                                'flex-grow',
                                'flex-shrink',
                                'flex-wrap',
                                'flex-line-pack',
                                'align-content',
                                'box-align',
                                'flex-align',
                                'align-items',
                                'flex-item-align',
                                'align-self',
                                'box-pack',
                                'flex-pack',
                                'justify-content',
                                'box-ordinal-group',
                                'flex-order',
                                'order',
                                'grid',
                                'grid-area',
                                'grid-auto-columns',
                                'grid-auto-flow',
                                'grid-auto-rows',
                                'grid-column',
                                'grid-column-end',
                                'grid-column-gap',
                                'grid-column-start',
                                'grid-gap',
                                'grid-row',
                                'grid-row-end',
                                'grid-row-gap',
                                'grid-row-start',
                                'grid-template',
                                'grid-template-areas',
                                'grid-template-columns',
                                'grid-template-rows',
                                'box-sizing',
                                'width',
                                'max-width',
                                'min-width',
                                'height',
                                'max-height',
                                'min-height',
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
                                'border',
                                'border-top',
                                'border-right',
                                'border-bottom',
                                'border-left',
                                'border-collapse',
                                'border-color',
                                'border-top-color',
                                'border-right-color',
                                'border-bottom-color',
                                'border-left-color',
                                'border-spacing',
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
                                'border-radius',
                                'border-top-left-radius',
                                'border-top-right-radius',
                                'border-bottom-left-radius',
                                'border-bottom-right-radius',
                                'background',
                                'background-attachment',
                                'background-clip',
                                'background-color',
                                'background-image',
                                'background-origin',
                                'background-position',
                                'background-repeat',
                                'background-size',
                                'box-shadow',
                                'object-fit',
                                'opacity',
                                'outline',
                                'outline-color',
                                'outline-style',
                                'outline-width',
                                'color',
                                'font',
                                'font-family',
                                'font-size',
                                'font-stretch',
                                'font-style',
                                'font-variant',
                                'font-weight',
                                'hanging-punctuation',
                                'letter-spacing',
                                'line-height',
                                'text-align',
                                'text-decoration',
                                'text-indent',
                                'text-justify',
                                'text-overflow',
                                'text-shadow',
                                'text-stroke',
                                'text-transform',
                                'vertical-align',
                                'white-space',
                                'word-break',
                                'word-spacing',
                                'word-wrap',
                                'animation',
                                'animation-delay',
                                'animation-direction',
                                'animation-duration',
                                'animation-iteration-count',
                                'animation-fill-mode',
                                'animation-name',
                                'animation-play-state',
                                'animation-timing-function',
                                'backface-visibility',
                                'perspective',
                                'perspective-origin',
                                'transform',
                                'transform-origin',
                                'transform-style',
                                'transition',
                                'transition-delay',
                                'transition-duration',
                                'transition-property',
                                'transition-timing-function',
                                'will-change',
                                'appearance',
                                'cursor',
                                'pointer-events',
                                'user-select',
                                'touch-action',
                                'touch-callout',
                            ],
                            'unspecified-properties-position': 'bottom',
                        }),
                    ]
                },
                src: 'lib/**/*.less',
            },
            autoprefixing: {
                options: {
                    syntax: require('postcss-less'),
                    processors: [
                        require('autoprefixer')({
                            browsers: 'last 2 versions'
                        }),
                    ]
                },
                src: 'lib/**/*.less',
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
    grunt.registerTask('build', ['less:production', 'less:partials', 'clean:partials', 'cssmin']);
    grunt.registerTask('update-icons', ['clean:icons', 'copy']);
    grunt.registerTask('process-css', ['postcss']);
};
