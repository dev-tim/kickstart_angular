define(function (require) {
  'use strict';

  var angular = require('angular'),
    topHeaderControlsTpl = require('text!app/templates/directive/top.header.controls.html');

  return angular.module('app.directive.top.header.controls', [])
    .directive('topHeaderControls', function () {
      return {
        restrict: 'EA',
        template: topHeaderControlsTpl,
        link: function (scope, element, attr) {
          console.log("Top nav rendered!");
        }
      };
    });

});