/**
 * Created by devartemz on 23.03.14.
 */
define(function (require, module, exports) {
  'use strict';
  var angular = require('angular'),
    asideInfoTemplate = require('text!app/templates/directive/asideInfo.html');

  return angular.module('app.directives', [])
    .directive('asideInfo', function ($timeout) {
      return {
        restrict: 'EA',
        template: asideInfoTemplate,
        link: function (scope, element, attr) {

        }
      };
    });
});