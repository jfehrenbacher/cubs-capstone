'use strict';

/**
 * @ngdoc function
 * @name cubsCapstoneApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the cubsCapstoneApp
 */
angular.module('cubsCapstoneApp')
  .controller('PlayerCtrl', function ($scope, player, $routeParams) {
  	$scope.playerid = $routeParams.playerid;
  	$scope.playerinfo = player.query({
  		playerid:$scope.playerid
  	});
  });
