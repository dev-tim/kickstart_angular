define(function (require) {
  var angular = require('angular');

  return angular.module('app.services.interceptor', [])
    .factory('HttpInterceptor', ['$q', '$rootScope', '$timeout', function ($q, $rootScope, $timeout) {
      return  {
        request: function (request) {
          return request;
        },
        requestError: function (request) {
          return $q.reject(request);
        },
        response: function (response) {
          return response;
        },
        responseError: function (response) {
          return $q.reject(response);
        }
      };
    }])
    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('HttpInterceptor');
    }]);

});