nasaApp.controller("FindController", function ($scope) {
    $scope.start_date = localStorage["start_date"] != undefined ? localStorage["start_date"] : "2016-06-20";
    $scope.end = localStorage["end_date"];
    $scope.show = function (date, dateForm) {
        if (dateForm.$valid) {
            if (check(date.start, date.end)) {
                localStorage["start_date"] = date.start;
                localStorage["end_date"] = date.end;
                document.location.href = "/#ListbyDate";
            }
        }
        else alert("Wrong date format!");
    };
});

function check(start, end) {
    var summ = parseInt(end.substring(0, 4)) * 365 + parseInt(end.substring(5, 7)) * 30 + parseInt(end.substring(8, 10)) - parseInt(start.substring(0, 4)) * 365 - parseInt(start.substring(5, 7)) * 30 - parseInt(start.substring(8, 10));
    if (summ >= -7 && summ <= 7) {
        return true;
    }
    else {
        alert("Difference between dates doesn't can be more 7");
        return false;
    }

}
