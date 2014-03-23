define(function (require) {
  'use strict';
  var angular = require('angular'),
    topHeader = require('./top.header'),
    asideInfo = require('./asideInfo');

  return angular.module('app.directives', [
    topHeader.name,
    asideInfo.name
  ]);
});
