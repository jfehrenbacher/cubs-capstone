'use strict';

/**
 * @ngdoc function
 * @name cubsCapstoneApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the cubsCapstoneApp
 */
angular.module('cubsCapstoneApp')
  .controller('PlayerCtrl', function ($scope, player, players, $routeParams, $location, $localStorage) {
  	$scope.playerid = $routeParams.playerid;
  	$scope.playerinfo = player.query({
  		playerid:$scope.playerid
  	});
  	$scope.players = $localStorage.players;

  	    $scope.selectPlayer = function(playerid){
  	    	console.log("Redirecting to: " + playerid);
  	    	$location.path('/player/' + playerid);
  		};

  	$scope.labels = ["Strikeouts", "Walks"];
  	$scope.data = [45, 37];

  });


// angular.module('cubsCapstoneApp')
//   .controller('PlayerCtrl', function ($scope, players, $location) {
//     $scope.players = players.query();

//         $scope.selectPlayer = function(playerid){
//         	console.log("Redirecting to: " + playerid);
//         	$location.path('/player/' + playerid);
//     	};
//   });


