module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //new task here
    uglify: {
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    //new task here
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'css/main.css': 'sass/main.scss',       // 'destination': 'source'
          'css/about.css': 'sass/about.scss',
          'css/filmography.css': 'sass/filmography.scss',
        }
      }
    },

    //new task here
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['css/libs/bootstrap.min.css','css/main.css','css/about.css'],
        dest: 'css/build/main.css',
      },
    },

    //new task here
    cssmin: {
      add_banner: {
        options: {
          banner: '/* My minified css file that contains bootstrap and main.css*/'
        },
        files: {
          'css/build/main.css': ['css/build/main.css']
        }
      }
    },

    //new task here
    watch: {
      css: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass','concat','cssmin','watch']);
};