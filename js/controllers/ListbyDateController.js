var api_key = "3lz4mKuA60vuDOUyDXoYqHGdhqV7bp6jbVKj3lWu";
var NASA_object;
var NASA_link = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + localStorage["start_date"] + "&end_date=" + localStorage["end_date"] + "&api_key=" + api_key;
nasaApp.controller("ListbyDateController", function ($scope, $http) {
    $http.get(NASA_link).success(function (data) {
        NASA_object = JSON.stringify(data);
        JSON.parse(NASA_object, function (key, value) {
            var myDate = new Date(key)
            if ('Invalid Date' != myDate) {
                asteroid_list = value;
            }
            return value;
        });
        $scope.asteroid_list = asteroid_list;

    }).error(function () {
        alert("server is not available");
    });
    
});