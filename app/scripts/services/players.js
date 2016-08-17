'use strict';

/**
 * @ngdoc service
 * @name cubsCapstoneApp.players
 * @description
 * # players
 * Factory in the cubsCapstoneApp.
 */
angular.module('cubsCapstoneApp')
  .factory('players', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://crossorigin.me/http://api.sportradar.us/mlb-t5/teams/55714da8-fcaf-4574-8443-59bfb511a524/profile.json?api_key=y6xvq7cqw9hdy7uyxdh99bny', {}, {
      query: {
        method:'GET',
        params:{
        },
        isArray:false
      }
    });
  });




