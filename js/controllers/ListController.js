var api_key = "3lz4mKuA60vuDOUyDXoYqHGdhqV7bp6jbVKj3lWu";
nasaApp.controller("ListController",
    function($scope, $http) {
        if (localStorage["page"] == undefined) localStorage["page"] = 0;
        if (localStorage["size"] == undefined) localStorage["size"] = 5;
        $scope.page = parseInt(localStorage["page"]);
        $scope.size = localStorage["size"];
        var link = 'https://api.nasa.gov/neo/rest/v1/neo/browse?page=' + localStorage["page"] + '&size=' + localStorage["size"] + '&api_key=' + api_key;
        $http.get(link)
            .success(function(data) {
                $scope.asteroid_list = data;
            })
            .error(function() {
                alert("server is not available");
                location.document.href = "#/NotFound";
            });
        $scope.submit = function (data) {
            if (data.page > $scope.asteroid_list.page.total_pages) data.page = $scope.asteroid_list.page.total_pages-1;
            if (data.page < 0 || data.page == undefined) data.page = 0;
            if (data.size > 10) {data.size = 10;}
            if (data.size < 1 || data.size == undefined) data.size = localStorage["size"];
            localStorage["page"] = data.page;
            localStorage["size"] = data.size;
            document.location.reload();
        };
        $scope.next = function () {
            if ($scope.asteroid_list.page.number == $scope.asteroid_list.page.total_pages - 1) return;
            localStorage["page"] = $scope.asteroid_list.page.number + 1;
            document.location.reload();
        };
        $scope.last = function () {
            if ($scope.asteroid_list.page.number == 0) return;
            localStorage["page"] = $scope.asteroid_list.page.total_pages - 1;
            document.location.reload();
        };
        $scope.prev = function () {
            if ($scope.asteroid_list.page.number == 0) return;
            localStorage["page"] = $scope.asteroid_list.page.number - 1;
            document.location.reload();
        }
        $scope.first = function() {
            localStorage["page"] = 0;
            document.location.reload();
        }
        $scope.next2 = function() {
            if ($scope.asteroid_list.page.number == $scope.asteroid_list.page.total_pages - 2) return;
            localStorage["page"] = $scope.asteroid_list.page.number + 2;
            document.location.reload();
        }
        $scope.prev2 = function() {
            if ($scope.asteroid_list.page.number == 0 || $scope.asteroid_list.page.number == 1) return;
            localStorage["page"] = $scope.asteroid_list.page.total_pages - 2;
            document.location.reload();
        }
    });
