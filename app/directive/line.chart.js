/**
 * Created by devartemz on 23.03.14.
 */
define(function (require, module, exports) {
  'use strict';
  var angular = require('angular'),
    Morris = require('morris'),
    lineChartTemplate = require('text!app/templates/directive/line.chart.html');

  return angular.module('app.directives.line.chart', [])
    .directive('lineChart', function () {
      return {
        restrict: 'EA',
        template: lineChartTemplate,
        link: function (scope, element, attr) {
          var stubData = [
            {"period": "2011 Q3", "commits": 1},
            {"period": "2011 Q2", "commits": 3},
            {"period": "2011 Q1", "commits": 5},
            {"period": "2010 Q4", "commits": 3},
            {"period": "2009 Q4", "commits": 2},
            {"period": "2008 Q4", "commits": 1},
            {"period": "2007 Q4", "commits": 7},
            {"period": "2006 Q4", "commits": 4},
            {"period": "2005 Q4", "commits": 3}
          ];
          Morris.Line({
            element: 'sampleLineChart',
            data: stubData,
            xkey: 'period',
            ykeys: ['commits'],
            labels: ['Commits']
          });
        }
      };
    });
});