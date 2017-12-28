'use strict';

angular.module('myApp.admin', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'views/admin/admin.html',
            controller: 'AdminCtrl'
        });
    }])

    .controller('AdminCtrl', ['$scope', 'configService', 'adminCabService', function ($scope, configService, adminCabService) {
        $scope.init = function () {
            $scope.center = configService.defaultLocation;
            adminCabService.getAllCabs($scope.center).then(function (cabs) {
                $scope.cars = cabs;
            }, function () {
                $scope.failed = true;
            });
        };
        $scope.clear = function () {
            adminCabService.resetAll().then($scope.init, $scope.init);
        }
        $scope.init();
    }]);