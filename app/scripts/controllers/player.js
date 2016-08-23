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
    $scope.pageClass = 'page-player';
  	$scope.playerid = $routeParams.playerid;
  	$scope.bustCache = true;
  	if ($localStorage[$scope.playerid]) {
  		// localStorage value exists. Now check lastRetrieved.
  		var today = new Date();
  		var lastRetrieved = new Date($localStorage[$scope.playerid].lastRetrieved);
  		$scope.timeDiff = (today - lastRetrieved) / (1000 * 60 * 60 * 24);
  		if ($scope.timeDiff < 1) {
  			$scope.bustCache = false;
  		}
  	} 
  	if ($scope.bustCache) {
  		console.log ('Fetching player info');
	  	$scope.playerinfo = player.query({
	  		playerid:$scope.playerid
	  	});
	  	$scope.playerinfo.$promise.then(function(data){
	    	$localStorage[data.player.id]={
	    		data:data,
	    		lastRetrieved: new Date()
	    	};
	    });
	  } else {
	  	console.log('Pulling player info from localStorage');
	  	$scope.playerinfo = $localStorage[$scope.playerid].data;
	  }

  	$scope.players = $localStorage.players;

  	    $scope.selectPlayer = function(playerid){
  	    	console.log("Redirecting to: " + playerid);
  	    	$location.path('/player/' + playerid);
  		};

  });


// angular.module('cubsCapstoneApp')
//   .controller('PlayerCtrl', function ($scope, players, $location) {
//     $scope.players = players.query();

//         $scope.selectPlayer = function(playerid){
//         	console.log("Redirecting to: " + playerid);
//         	$location.path('/player/' + playerid);
//     	};
//   });


