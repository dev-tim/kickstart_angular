define(function (require) {
  'use strict';
  var angular = require('angular'),
    topHeader = require('./top.header'),
    sideNav = require('./side.nav');

  return angular.module('app.directives', [
    topHeader.name,
    sideNav.name
  ]);
});
