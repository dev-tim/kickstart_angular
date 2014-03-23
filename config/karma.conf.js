module.exports = function (config) {
  'use strict';
  config.set({
    basePath: '../',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      {pattern: 'app/app.js' , included: false},
      {pattern: 'app/**/*.js', included: false},
      {pattern: 'app/templates/**/*.html', included: false},
      {pattern: 'test/unit.js', included: false},
      {pattern: 'test/unit/*.js', included: false},
      {pattern: 'test/unit/**/*.js', included: false},
      {pattern: 'bower_components/**/*.js', included: false},
      'test/main-test.js'
    ],
    exclude : [
      'app/main.js'
    ],


    autoWatch: true,
    browsers: ['Firefox','Chrome'],
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    reporters: ['progress'],
    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ]
  });
};
