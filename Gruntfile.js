"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        // Shell commands for use in Grunt tasks
        shell: {
            eleventyBuild: {
                command: "npx @11ty/eleventy",
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: "docs",
                        maxBuffer: 1000 * 1024,
                    },
                },
            },
            eleventyServe: {
                command: "npx @11ty/eleventy --serve",
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: "docs",
                        maxBuffer: 1000 * 1024,
                    },
                },
            },
        },
        // Less compilation
        less: {
            stacks: {
                files: {
                    "dist/css/stacks.css": "lib/css/stacks.less",
                },
            },
            // note that the docs CSS includes the full Stacks
            docs: {
                files: {
                    "docs/assets/css/stacks-documentation.css":
                        "docs/assets/less/stacks-documentation.less",
                },
            },
            stacks_partials: {
                // these files are immediately deleted because we don't distribute them directly, but we must ensure
                // that they compile (e.g. if a static file accidentally accesses the dynamic options, the full bundle will compile
                // fine, but stacks-static alone will blow up)
                files: {
                    "tmp/css/stacks-static.css": "lib/css/stacks-static.less",
                    "tmp/css/stacks-dynamic.css": "lib/css/stacks-dynamic.less",
                },
            },
        },
        // Minify our compiled CSS
        cssmin: {
            stacks: {
                files: {
                    "dist/css/stacks.min.css": "dist/css/stacks.css",
                },
            },
            docs: {
                files: {
                    "docs/assets/css/stacks-documentation.min.css":
                        "docs/assets/css/stacks-documentation.css",
                },
            },
        },
        // Minify and concatenate JS
        ts: {
            stacks_js: {
                tsconfig: "lib/tsconfig.json",
            },
            docs_js: {
                tsconfig: "docs/assets/js/tsconfig.json",
            },
            options: {
                declaration: true,
            },
        },
        uglify: {
            stacks_js: {
                files: {
                    "dist/js/stacks.min.js": ["dist/js/stacks.js"],
                },
            },
        },
        concat: {
            stacks_js: {
                options: {
                    separator: "\n\n;\n\n",
                },
                files: {
                    "dist/js/stacks.js": [
                        "node_modules/stimulus/dist/stimulus.umd.js",
                        "node_modules/@popperjs/core/dist/umd/popper.js",
                        "build/lib/ts/stacks.js",
                        "build/lib/ts/controllers/**/*.js",
                        "build/lib/ts/finalize.js",
                    ],
                },
            },
        },
        // Watch for files to change and run tasks when they do
        watch: {
            // If any Stacks LESS file changes, both the Stacks CSS and the docs CSS have to be
            // recompiled, because that latter @imports the Stacks LESS.
            stacks_less: {
                files: ["lib/css/**/*.less"],
                tasks: ["concurrent:compile_stacks_css"],
            },

            // On the other hand, a change to docs .less only requires recompilation of the docs CSS
            docs_less: {
                files: ["docs/**/*.less", "!docs/_site/**"],
                tasks: ["less:docs", "cssmin:docs"],
            },

            docs_js: {
                files: ["docs/assets/js/controllers/*.js"],
                tasks: ["ts:docs_js"],
            },

            stacks_js: {
                files: ["lib/ts/**/*.ts"], // note: this doesn't watch any of the npm dependencies
                tasks: [
                    "concurrent:compile_stacks_js",
                    "copy:js2docs",
                    "copy:jQueryJs",
                    "copy:highlightJs",
                    "copy:docsearchJs",
                    "copy:listJs",
                    "copy:editorJs",
                    "copy:editorCSS",
                ],
            },
        },
        // Run tasks in parallel
        concurrent: {
            options: {
                logConcurrentOutput: true,
            },

            serve: ["watch", "shell:eleventyServe"],

            // CSS and JS compilation don't impact each other, thus can run in parallel
            compile: [
                "concurrent:compile_stacks_css",
                "ts:docs_js",
                [
                    "concurrent:compile_stacks_js",
                    "copy:js2docs",
                    "copy:jQueryJs",
                    "copy:highlightJs",
                    "copy:docsearchJs",
                    "copy:listJs",
                    "copy:editorJs",
                    "copy:editorCSS",
                ],
            ],

            // Stacks JS
            compile_stacks_js: [
                ["ts:stacks_js", "concat:stacks_js", "uglify:stacks_js"],
            ],

            // the actual stacks, the docs CSS (which also includes Stacks, but via a LESS @import), and the partials
            // can be compiled in parallel as well
            compile_stacks_css: [
                ["less:stacks", "cssmin:stacks"],
                ["less:stacks_partials", "clean:stacks_partials"],
                ["less:docs", "cssmin:docs"],
            ],
        },

        clean: {
            // Clean-up the partial CSS files created in less:stacks_partials to ensure that
            // dynamic and static part compile independently of each other
            stacks_partials: ["tmp/"],
        },

        copy: {
            // copy the compiled JS files into the Eleventy source
            js2docs: {
                src: "dist/js/*.js",
                dest: "docs/assets/js/",
                flatten: true,
                expand: true,
            },
            editorJs: {
                src: "node_modules/@stackoverflow/stacks-editor/dist/app.bundle.js",
                dest: "docs/assets/js/",
                flatten: true,
                expand: true,
                rename: function (dest, src) {
                    return (
                        dest +
                        src.replace("app.bundle.js", "library.stacks-editor.js")
                    );
                },
            },
            jQueryJs: {
                src: "node_modules/jquery/dist/jquery.min.js",
                dest: "docs/assets/js/",
                flatten: true,
                expand: true,
                rename: function (dest, src) {
                    return (
                        dest + src.replace("jquery.min.js", "library.jquery.js")
                    );
                },
            },
            highlightJs: {
                src: "node_modules/@highlightjs/cdn-assets/highlight.min.js",
                dest: "docs/assets/js/",
                flatten: true,
                expand: true,
                rename: function (dest, src) {
                    return (
                        dest +
                        src.replace("highlight.min.js", "library.highlight.js")
                    );
                },
            },
            docsearchJs: {
                src: "node_modules/docsearch.js/dist/cdn/docsearch.min.js",
                dest: "docs/assets/js/",
                flatten: true,
                expand: true,
                rename: function (dest, src) {
                    return (
                        dest +
                        src.replace("docsearch.min.js", "library.docsearch.js")
                    );
                },
            },
            listJs: {
                src: "node_modules/list.js/dist/list.min.js",
                dest: "docs/assets/js/",
                flatten: true,
                expand: true,
                rename: function (dest, src) {
                    return dest + src.replace("list.min.js", "library.list.js");
                },
            },
            editorCSS: {
                src: "node_modules/@stackoverflow/stacks-editor/dist/styles.css",
                dest: "docs/assets/css/",
                flatten: true,
                expand: true,
                rename: function (dest, src) {
                    return (
                        dest + src.replace("styles.css", "stacks-editor.css")
                    );
                },
            },
            declarations: {
                expand: true,
                cwd: "build/lib/ts",
                src: "stacks.d.ts",
                dest: "dist/js/",
            },
        },
    });

    // Load plugins
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask(
        "default",
        "Compile all JS and LESS files and rebuild the documentation site, then continue running and re-compile as needed whenever files are changed.",
        ["concurrent:compile", "concurrent:serve"]
    );

    grunt.registerTask(
        "build",
        "Compile all JS and LESS files and rebuild the documentation site.",
        ["concurrent:compile", "shell:eleventyBuild", "copy:declarations"]
    );

    grunt.registerTask(
        "deploy-docs",
        "Prep and build the documentation site so it is ready for deploy.",
        ["build"]
    );
};
