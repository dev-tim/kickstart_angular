define(function (require) {
  'use strict';
  var angular = require('angular'),
    topHeader = require('./top.header'),
    topHeaderControls = require('./top.header.controls'),
    sideNav = require('./side.nav'),
    barChart = require('./bar.chart'),
    lineChart = require('./line.chart'),
     socialStatsPanel = require('./social.panel');

  return angular.module('app.directives', [
    topHeader.name,
    topHeaderControls.name,
    sideNav.name,
    barChart.name,
    lineChart.name,
    socialStatsPanel.name
  ]);
});
