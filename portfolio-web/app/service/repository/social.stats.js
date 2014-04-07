define(function (require) {
  var angular = require('angular');

  return angular.module('social.stats',[])
    .factory('socialStats', function ($http) {

      return {
        //need to move find operation to server side
        fetchSocialStats: function () {
          return $http.get('stubs/social.json');
        },
        findStats: function (stats, type) {
          stats = stats || [];
          if (typeof type !== "string") {
            return stats;
          }
          var filtered = stats.filter(function (item) {
            return item.type === type;
          });
          return filtered.pop() || {};
        }
      };


    });
});