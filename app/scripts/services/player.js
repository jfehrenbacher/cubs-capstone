'use strict';

/**
 * @ngdoc service
 * @name cubsCapstoneApp.player
 * @description
 * # player
 * Factory in the cubsCapstoneApp.
 */
angular.module('cubsCapstoneApp')
  .factory('player', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://crossorigin.me/http://api.sportradar.us/mlb-t5/players/:playerid/profile.json?api_key=y6xvq7cqw9hdy7uyxdh99bny', {}, {
      query: {
        method:'GET',
        params:{
          playerid: null
        },
        isArray:false
      }
    });
  });
