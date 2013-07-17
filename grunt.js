/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    paths: {
	  scripts: {
        src: 'scripts',
        dst: 'scripts'
      },
      styles: {
        src: 'styles',
        dst: 'styles'
      }
    },

    watch: {
      styles: {
        files: '<%= paths.styles.src %>/**/*.less',
        tasks: 'tech-styles-update'
      }
    },


    clean: {
      // clear concat targets
      files: [
        '<%= paths.styles.src %>/__main.less'
      ]
    },


    concat: {
      styles: {
        src: [
          '<%= paths.styles.src %>/*.less',
          '<%= paths.styles.src %>/blocks/**/main.less',
          '<%= paths.styles.src %>/blocks/**/**/main.less'
        ],
        dest: '<%= paths.styles.src %>/__main.less'
      }
    },


    /**
     * Documentation: https://github.com/gruntjs/grunt-contrib-less
     */
    less: {
      development: {
        files: {
          '<%= paths.styles.dst %>/__main.css': '<%= paths.styles.src %>/__main.less'
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          '<%= paths.styles.dst %>/_main.css': '<%= paths.styles.src %>/__main.less'
        }
      }
    }
  });


  // Default task.
  grunt.registerTask('default');

};
