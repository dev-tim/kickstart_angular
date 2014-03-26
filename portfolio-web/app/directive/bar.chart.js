/**
 * Created by devartemz on 23.03.14.
 */
define(function (require, module, exports) {
  'use strict';
  var angular = require('angular'),
    Morris = require('morris'),
    barChartTemplate = require('text!app/templates/directive/bar.chart.html');

  return angular.module('app.directives.bar.chart', [])
    .directive('barChart', function () {
      return {
        restrict: 'EA',
        template: barChartTemplate,
        link: function (scope, element, attr) {
          Morris.Donut({
            element: 'sampleBarChart',
            data: [
              {label: 'Scala', value: 30 },
              {label: 'Js', value: 40 },
              {label: 'CSS', value: 20 },
              {label: 'Ansible', value: 10 }
            ],
            formatter: function (y) {
              return y + "%";
            }
          });
        }
      };
    });
});