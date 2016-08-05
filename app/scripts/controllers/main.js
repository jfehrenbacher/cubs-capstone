'use strict';

/**
 * @ngdoc function
 * @name cubsCapstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cubsCapstoneApp
 */
angular.module('cubsCapstoneApp')
  .controller('MainCtrl', function ($scope, players, $location) {
    $scope.players = players.query();

        $scope.selectPlayer = function(playerid){
        	console.log("Redirecting to: " + playerid);
        	$location.path('/player/' + playerid);
    	};
  });
