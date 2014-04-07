module.exports = function (config) {
  'use strict';
  config.set({
    basePath: '../',
    frameworks: ['requirejs','jasmine'],
    files: [
      {pattern: 'app/app.js' , included: false},
      {pattern: 'app/**/*.js', included: false},
      {pattern: 'app/templates/**/*.html', included: false},
      {pattern: 'test/unit.js', included: false},
      {pattern: 'test/unit/*.js', included: false},
      {pattern: 'test/unit/**/*.js', included: false},
      {pattern: 'bower_components/**/*.js', included: false},
      {pattern: 'stubs/**/**', included: false},
      'test/main-test.js'
    ],
    exclude : [
      'app/main.js'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    reporters: ['progress'],
    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ]
  });
};
