var nasaApp = angular.module('nasaApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/ListbyDate',
        {
            templateUrl:'views/ListbyDate.html',
            controller:'ListbyDateController'
        });
        $routeProvider.when('/Details/:id',
        {
            templateUrl:'views/Asteroid.html',
            controller:'AsteroidController'
        });
        $routeProvider.when('/Find',
        {
            templateUrl:'views/Find.html',
            controller:'FindController'
        });
        $routeProvider.when('/NotFound',
       {
           templateUrl: 'views/NotFound.html',
           controller: 'NotFoundController'
       });
        $routeProvider.when('/List',
       {
           templateUrl: 'views/List.html',
           controller: 'ListController'
       });
        $routeProvider.otherwise({redirectTo: '/Find'});
});