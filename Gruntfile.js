module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
       dist: {
          options: {
             transform: [
                ["babelify", {
                   loose: "all"
                }]
             ]
          },
          files: {
             // if the source file has an extension of es6 then
             // we change the name of the source file accordingly.
             // The result file's extension is always .js
             "./dist/modules.js": ["./modules/main.js"]
          }
       }
    },
    sass: {
      dist: {
        files: {
          'dist/style.css' : 'stylesheets/style.scss'
        }
      }
    },
    watch: {
       scripts: {
          files: ["./modules/**/*.js"],
          tasks: ["browserify"]
       },
       css: {
         files: '**/*.scss',
         tasks: ['sass']
       }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify", "sass"]);
};
