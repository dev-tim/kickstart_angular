define(function (require) {

  var angular = require('angular'),
    socialStatsPanelTpl = require('text!app/templates/directive/social.stats.html');

  return angular.module('socialStatsPanel', [])
    .directive('socialStatsPanel', function (socialStats) {
      return {
        restrict: 'EA',
        replace: true,
        template: socialStatsPanelTpl,
        scope: {
          panelClass: '@',
          faicon: '@',
          type: '@'
        },
        controller: function ($scope) {
          $scope.stats = {};
          socialStats.fetchSocialStats()
            .success(function (data) {
              $scope.stats = socialStats.findStats(data, $scope.type);
            }).error(function (data) {
              console.log("error happened", data)
            });
        },
        link: function (scope, element, attr) {
        }
      };
    });

});