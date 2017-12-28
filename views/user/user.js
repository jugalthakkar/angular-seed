'use strict';

angular.module('myApp.user', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/user/user.html',
            controller: 'UserCtrl'
        });
    }])

    .controller('UserCtrl', ['$scope', 'configService', 'userCabService', function ($scope, configService, userCabService) {
        $scope.init = function(){
            $scope.center = configService.defaultLocation;
            userCabService.getAvailableCabs($scope.center).then(function (cabs) {
                $scope.cars = cabs;
            }, function () {
                $scope.failed = true;
            });
        };

        $scope.setPosition = function (e) {
            $scope.center = [e.latLng.lat(), e.latLng.lng()];
        };

        $scope.go = function () {
            userCabService.bookACab({
                latitude: $scope.center[0],
                longitude: $scope.center[1]
            }, $scope.name).then(function (data) {
                $scope.selectedCar = data.driver;
                $scope.booked = true;
            }, function () {
                $scope.failed = true;
                $scope.init();
            });
        }

        $scope.init();
    }]);