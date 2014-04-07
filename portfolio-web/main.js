require.config({
  paths: {
    angular: '../bower_components/angular/angular',
    uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
    ngResource: '../bower_components/angular-resource/angular-resource',
    angularScenario: '../bower_components/angular-scenario/angular-scenario',
    angularMocks: '../bower_components/angular-mocks/angular-mocks',
    jquery: '../bower_components/jquery/dist/jquery',
    d3: '../bower_components/d3/d3',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    angularBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap',
    angularBootstrapTpl: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    text: '../bower_components/requirejs-text/text',
    morris: '../bower_components/morris.js/morris',
    raphael: '../bower_components/raphael/raphael'
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
    'ngResource': {
      deps: ['angular']
    },
    'uiRouter': {
      deps: ['angular']
    },
    'angularMocks': {
      deps: ['angular'],
      'exports': 'angular.mock'
    },
    'morris': {
      deps: ['raphael'],
      exports: 'Morris'
    }
  },
  priority: [
    "jquery",
    "angular"
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
//window.name = "NG_DEFER_BOOTSTRAP!";

require(['jquery',
  'angular',
  'app/app',
  'text!app/templates/layout.html',
  'bootstrap',
  'angularBootstrap',
  'angularBootstrapTpl',
  'morris'
], function ($, angular, app, layout) {
  'use strict';

  angular.element().ready(function () {
    angular.element(document.body).html(layout);

    angular.bootstrap(document.getElementById('wrapper'), ['app']);
    console.info('App was initialized');
  });
});
