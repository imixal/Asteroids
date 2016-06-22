var api_key = "3lz4mKuA60vuDOUyDXoYqHGdhqV7bp6jbVKj3lWu";

nasaApp.controller("AsteroidController",
    function ($scope, $http, $routeParams, $location) {      
        $scope.$on("$routeChangeSuccess", function () {
            var id = $routeParams["id"];
            var link = "https://api.nasa.gov/neo/rest/v1/neo/" + id + "?api_key=" + api_key;
            if (id !== 'undefined') {
                $http.get(link)
                    .success(function (data) {
                        $scope.asteroid = data;
             }).error(function() {
                 document.location.href= "#/NotFound"; 
                    });
            } 
        });
    });