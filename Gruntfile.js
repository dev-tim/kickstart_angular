var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function (grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var karmaConfig = function (configFile, customOptions) {
    var options = { configFile: configFile, keepalive: true };
    return grunt.util._.extend(options, customOptions);
  };
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    requirejs: {
      compile: {
        options: {
          mainConfigFile: 'app/main.js',
          name: '../bower_components/almond/almond',
          optimizeCss: 'standard',
          out: 'dist/app.min.js'
        }
      }
    },
    karma: {
      unit: { options: karmaConfig('config/karma.conf.js') }
    },
    compass: {
      build: {
        options: {
          basePath: '/',
          config: 'config.rb'
        }
      }
    },
    watch: {
      // livereload for css and js files
      livereload: {
        options: {
          livereload: true
        },
        files: ['/css/*.css', '/app/**/*', '/scss/**/*.scss', '/scss/*.scss', '/*.js']
      },
      scss: {
        files: ['/scss/**/*'],
        tasks: ['compass']
      }
    },

    connect: {
      options: {
        base: '',
        port: 9000,
        hostname: '*'
      },
      proxies: [
        {
          context: '/api',
          host: 'localhost',
          port: 8080
        }
      ],
      livereload: {
        options: {
          middleware: function (connect, options) {
            return [
              proxySnippet,
              lrSnippet,
              connect.static(options.base)
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              connect.static('test')
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['requirejs', 'compass', 'karma']);
  grunt.registerTask('server', [
    'configureProxies',
    'connect:livereload',
    'watch'
  ]);
};