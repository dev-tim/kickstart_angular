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
    angularMocks: '../base/bower_components/angular-mocks/angular-mocks',
    text: '../base/bower_components/requirejs-text/text'
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
  }
});

require(allTestFiles, function () {
  'use strict';
  window.__karma__.start();
});

