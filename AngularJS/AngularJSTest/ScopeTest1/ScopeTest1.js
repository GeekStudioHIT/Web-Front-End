var myModule = angular.module("MyModule", []);

myModule.controller('EventController', ['$scope', function ($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent', function() {
        $scope.count++;
    });
}]);