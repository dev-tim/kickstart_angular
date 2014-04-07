define(function (require) {

  var angular = require('angular'),
    socialStatsPanelTpl = require('text!app/templates/directive/social.stats.html');

    return angular.module('app.directive.socialStatsPanel', ['app.services'])
    .directive('socialStatsPanel', function () {
      return {
        restrict: 'EA',
        replace: true,
        template: socialStatsPanelTpl,
        scope: {
          panelClass: '@',
          faicon: '@',
          type: '@'
        },
        controller: function ($scope, socialStats) {
          $scope.stats = {};
          socialStats.fetchSocialStats()
            .success(function (data) {
              $scope.stats = socialStats.findStats(data, $scope.type);
            }).error(function (data) {
              $scope.requestError = true;
            });
        },
        link: function (scope, element, attr) {
        }
      };
    });

});