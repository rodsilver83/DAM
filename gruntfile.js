/**
 * Created by jose.soria on 06/16/2015.
 */
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: '**/*.html'
      },
      js: {
        files: '**/*.js'
      },
      css: {
        files: '**/*.css'
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
          open: {
            target: 'http://localhost:8000/dma/',
            appName: 'Chrome',
          }
        }
      }
    },
    postcss: {
      options: {

        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dma/css/*.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dma/dist/js/angular.min.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-animate/angular-animate.js'],
          'dma/dist/js/movies.min.js': [
            'dma/js/app.js',
            'dma/js/controllers.js',
            'dma/js/filters.js',
            'dma/js/services.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dma/dist/css/movies.css': [
            'dma/css/animations.css',
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'dma/css/app.css'
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('server', "Serve your app", [
    'connect:server', 'watch']);

};