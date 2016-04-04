module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n\n',
                banner:'(function () {\n',
                footer:'\n})();\n'
            },
            dist: {
                src: [
                    'src/intro.js','src/find.js','src/create.js',
                    'src/control.js','src/nodes.js','src/sequence.js',
                    'src/model.js','src/macro.js','src/midi.js','src/connect.js',
                    'src/utilities.js','src/debug.js','src/outro.js',
                    'src/type.js', 'plugins/**/*.js'
                ],
                dest: 'dist/cracked.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/cracked.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'dist/cracked.js'],
            options: {
                // options here to override JSHint defaults
                nonew:true,
                curly:true,
                noarg:true,
                loopfunc:true,
                forin:true,
                noempty:true,
                eqeqeq:true,
                undef:true,
                bitwise:false,
                newcap:true,
                browser:true,
                globals: {
                    AudioContext: true,
                    webkitAudioContext: true,
                    __: true,
                    cracked: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        dox: {
            options: {
                title: "Cracked Documentation"
            },
            files: {
                src: ['src/find.js','src/control.js','src/nodes.js','src/sequence.js',
                    'src/macro.js','src/midi.js','src/connect.js','src/debug.js',
                    'src/type.js', 'plugins/**/*.js'],
                dest: 'docs'
            }
        },
        connect: {
            server: {
                options: {
                    keepalive:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-dox');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['concat', 'jshint', 'uglify','dox']);

};