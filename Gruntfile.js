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

    //Watches and compile Sass to CSS
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'css/main.css': 'sass/main.scss'       // 'destination': 'source'
        }
      }
    },

    //Takes compiled CSS files and builds them to 1 CSS file
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['css/main.css'],
        dest: 'css/build/main.css',
      },
    },

    //Takes the built CSS file and minifies it
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
    // connect: {
    //   server: {
    //     options: {
    //       port: 9001,
    //       base: ''
    //     }
    //   }
    // },

    //new task here
    watch: {
      css: {
        files  : ['sass/*.scss'],
        tasks  : ['sass']
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