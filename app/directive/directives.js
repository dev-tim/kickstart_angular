define(function (require) {
  'use strict';
  var angular = require('angular'),
    topHeader = require('./top.header'),
    topHeaderControls = require('./top.header.controls'),
    sideNav = require('./side.nav');

  return angular.module('app.directives', [
    topHeader.name,
    topHeaderControls.name,
    sideNav.name
  ]);
});
