require.config({
  paths: {
    angular: '../bower_components/angular/angular',
    uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
    angularMocks: '../bower_components/angular-mocks/angular-mocks',
    text: '../bower_components/requirejs-text/text'
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'uiRouter': {
      deps: ['angular']
    },
    'angularMocks': {
      deps: ['angular'],
      'exports': 'angular.mock'
    }
  },
  priority: [
    "angular"
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
  'angular',
  './app',
  'text!templates/layout.html'
], function (angular, app, layout) {
  'use strict';

  angular.element().ready(function () {
    angular.element(document.body).html(layout);

    angular.bootstrap(document, ['app']);
    console.info('App was initialized');
  });
});
