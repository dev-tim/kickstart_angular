var allTestFiles = [];
var TEST_REGEXP = /spec\.js$/i;

var pathToModule = function(path) {
  'use strict';
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  'use strict';
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(pathToModule(file));
  }
});


require.config({
  baseUrl: '/base',
  basePath: '/base',
  paths: {
    angular: '../base/bower_components/angular/angular',
    uiRouter: '../base/bower_components/angular-ui-router/release/angular-ui-router',
    angularScenario: '../base/bower_components/angular-scenario/angular-scenario',
    angularMocks: '../base/bower_components/angular-mocks/angular-mocks',
    jquery: '../base/bower_components/jquery/dist/jquery',
    d3: '../base/bower_components/d3/d3',
    bootstrap: '../base/bower_components/bootstrap/dist/js/bootstrap',
    angularBootstrap: '../base/bower_components/angular-bootstrap/ui-bootstrap',
    angularBootstrapTpl: '../base/bower_components/angular-bootstrap/ui-bootstrap-tpls',
    text: '../base/bower_components/requirejs-text/text',
    morris: '../base/bower_components/morris.js/morris',
    raphael: '../base/bower_components/raphael/raphael'
  },
  shim: {
    'jquery': {
      'exports': 'jquery'
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'angularBootstrap': {
      deps: ['jquery', 'bootstrap']
    },
    'angularBootstrapTpl': {
      deps: ['angularBootstrap']
    },
    'd3': {
      'exports': 'd3'
    },
    'angular': {
      'exports': 'angular'
    },
    'uiRouter': {
      deps: ['angular']
    },
    'angularMocks': {
      deps: ['angular'],
      'exports': 'angular.mock'
    },
    'morris' : {
      deps: ['raphael'],
      exports: 'Morris'
    }
  },
  priority: [
    "jquery",
    "angular"
  ]
});

require(allTestFiles, function () {
  'use strict';
  window.__karma__.start();
});

