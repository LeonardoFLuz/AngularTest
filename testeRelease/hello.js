var app = angular.module('ExampleApp', []);

app.controller('ExampleController', function($scope, $http) {
    $http.get('https://ghibliapi.herokuapp.com/films/').
        then(function(response) {
            $scope.exampleData = response.data;
        });
});