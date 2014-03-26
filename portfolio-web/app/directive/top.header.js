define(function (require) {
  'use strict';

  var angular = require('angular'),
    topHeaderTpl = require('text!app/templates/directive/top.header.title.html');

  return angular.module('app.directive.top.header', [])
    .directive('topHeader', function () {
      return {
        restrict: 'EA',
        template: topHeaderTpl,
        link: function (scope, element, attr) {
          console.log("Top nav rendered!");
        }
      };
    });

});