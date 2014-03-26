/**
 * Created by devartemz on 23.03.14.
 */
define(function (require, module, exports) {
  'use strict';
  var angular = require('angular'),
    sideNavTempalte = require('text!app/templates/directive/side.nav.html');

  return angular.module('app.directives.side.nav', [])
    .directive('sideNav', function () {
      return {
        restrict: 'EA',
        template: sideNavTempalte,
        link: function (scope, element, attr) {
          console.log("Side nav rendered!");
        }
      };
    });
});