"use strict";angular.module("cubsCapstoneApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngStorage"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/player/:playerid",{templateUrl:"views/player.html",controller:"PlayerCtrl",controllerAs:"player"}).otherwise({redirectTo:"/"})}]),angular.module("cubsCapstoneApp").controller("MainCtrl",["$scope","players","$location","$localStorage",function(a,b,c,d){a.players=b.query(),a.selectPlayer=function(b){console.log("Redirecting to: "+b),d.players=a.players,c.path("/player/"+b)}}]),angular.module("cubsCapstoneApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("cubsCapstoneApp").factory("players",["$resource",function(a){return a("http://crossorigin.me/http://api.sportradar.us/mlb-t5/teams/55714da8-fcaf-4574-8443-59bfb511a524/profile.json?api_key=y6xvq7cqw9hdy7uyxdh99bny",{},{query:{method:"GET",params:{},isArray:!1}})}]),angular.module("cubsCapstoneApp").controller("PlayerCtrl",["$scope","player","players","$routeParams","$location","$localStorage",function(a,b,c,d,e,f){if(a.playerid=d.playerid,a.bustCache=!0,f[a.playerid]){var g=new Date,h=new Date(f[a.playerid].lastRetrieved);a.timeDiff=(g-h)/864e5,a.timeDiff<1&&(a.bustCache=!1)}a.bustCache?(console.log("Fetching player info"),a.playerinfo=b.query({playerid:a.playerid}),a.playerinfo.$promise.then(function(a){f[a.player.id]={data:a,lastRetrieved:new Date}})):(console.log("Pulling player info from localStorage"),a.playerinfo=f[a.playerid].data),a.players=f.players,a.selectPlayer=function(a){console.log("Redirecting to: "+a),e.path("/player/"+a)}}]),angular.module("cubsCapstoneApp").factory("player",["$resource",function(a){return a("http://crossorigin.me/http://api.sportradar.us/mlb-t5/players/:playerid/profile.json?api_key=y6xvq7cqw9hdy7uyxdh99bny",{},{query:{method:"GET",params:{playerid:null},isArray:!1}})}]),angular.module("cubsCapstoneApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <div class="container vertical-center"> <div class="row"> <div class="span4"></div> <div class="span4"> <h1 class="mainTitle"><span id="mainKerning">Fa</span>vorite Cub</h1> <img class="center-block doublezero img-responsive" src="/images/doublezero.c43f7bd5.png"> <div class="mainSelect"> <select class="dropdown" ng-model="playerid"> <option value="{{player.id}}" ng-repeat="player in players.players">{{player.full_name}}</option> </select> <button class="mainButton" ng-click="selectPlayer(playerid)"> <span class="mainButtonText">Go <i class="fa fa-caret-right mainButtonArrow" style="font-size:14px"></i> </span> </button> </div> </div> <div class="span4"></div> </div> </div></div>'),a.put("views/player.html",'<h1 class="playerName">{{playerinfo.player.full_name}}</h1> <div class="slashline"> <div class="table-responsive"> <table class="table"> <thead> <tr> <th>Season</th> <th>AVG</th> <th>OBP</th> <th>SLG</th> <th>OPS</th> <th>HR</th> <th>RBI</th> <th>R</th> </tr> </thead> <tbody> <tr> <td>{{playerinfo.player.seasons[0].year}}</td> <td>{{playerinfo.player.seasons[0].teams[0].statistics.hitting.avg}}</td> <td>{{playerinfo.player.seasons[0].teams[0].statistics.hitting.obp}}</td> <td>{{playerinfo.player.seasons[0].teams[0].statistics.hitting.slg}}</td> <td>{{playerinfo.player.seasons[0].teams[0].statistics.hitting.ops}}</td> <td>{{playerinfo.player.seasons[0].teams[0].statistics.hitting.onbase.hr}}</td> <td>{{playerinfo.player.seasons[0].teams[0].statistics.hitting.rbi}}</td> <td>{{playerinfo.player.seasons[0].teams[0].statistics.hitting.runs.total}}</td> </tr> <tr> <td>{{playerinfo.player.seasons[1].year}}</td> <td>{{playerinfo.player.seasons[1].teams[0].statistics.hitting.avg}}</td> <td>{{playerinfo.player.seasons[1].teams[0].statistics.hitting.obp}}</td> <td>{{playerinfo.player.seasons[1].teams[0].statistics.hitting.slg}}</td> <td>{{playerinfo.player.seasons[1].teams[0].statistics.hitting.ops}}</td> <td>{{playerinfo.player.seasons[1].teams[0].statistics.hitting.onbase.hr}}</td> <td>{{playerinfo.player.seasons[1].teams[0].statistics.hitting.rbi}}</td> <td>{{playerinfo.player.seasons[1].teams[0].statistics.hitting.runs.total}}</td> </tr> <tr> <td>{{playerinfo.player.seasons[2].year}}</td> <td>{{playerinfo.player.seasons[2].teams[0].statistics.hitting.avg}}</td> <td>{{playerinfo.player.seasons[2].teams[0].statistics.hitting.obp}}</td> <td>{{playerinfo.player.seasons[2].teams[0].statistics.hitting.slg}}</td> <td>{{playerinfo.player.seasons[2].teams[0].statistics.hitting.ops}}</td> <td>{{playerinfo.player.seasons[2].teams[0].statistics.hitting.onbase.hr}}</td> <td>{{playerinfo.player.seasons[2].teams[0].statistics.hitting.rbi}}</td> <td>{{playerinfo.player.seasons[2].teams[0].statistics.hitting.runs.total}}</td> </tr> <tr> <td>{{playerinfo.player.seasons[3].year}}</td> <td>{{playerinfo.player.seasons[3].teams[0].statistics.hitting.avg}}</td> <td>{{playerinfo.player.seasons[3].teams[0].statistics.hitting.obp}}</td> <td>{{playerinfo.player.seasons[3].teams[0].statistics.hitting.slg}}</td> <td>{{playerinfo.player.seasons[3].teams[0].statistics.hitting.ops}}</td> <td>{{playerinfo.player.seasons[3].teams[0].statistics.hitting.onbase.hr}}</td> <td>{{playerinfo.player.seasons[3].teams[0].statistics.hitting.rbi}}</td> <td>{{playerinfo.player.seasons[3].teams[0].statistics.hitting.runs.total}}</td> </tr> </tbody> </table> </div> </div> <select class="dropdown" ng-model="playerid"> <option value="{{player.id}}" ng-repeat="player in players.players">{{player.full_name}}</option> </select> <button class="mainButton" ng-click="selectPlayer(playerid)"> <span class="mainButtonText">Go <i class="fa fa-caret-right mainButtonArrow" style="font-size:14px"></i> </span> </button> <!-- <canvas id="doughnut" class="chart chart-doughnut"\n  chart-data="data" chart-labels="labels">\n</canvas>  -->')}]);