'use strict';

var myApp = angular.module('myApp');
myApp.factory('adminCabService', ['$http', '$q', 'configService', 'userCabService', function ($http, $q, configService, userCabService) {

    return {
        getAllCabs: function (location) {
            return $q(function (resolve, reject) {
                $http.get(configService.serviceBaseUrl + 'drivers/').then(function (result) {
                    if (!result.data || !result.data.length) {
                        reject(userCabService.STATUS_CODES.NO_CABS);
                    } else {
                        resolve(result.data);
                    }
                }, function (result) {
                    reject(userCabService.STATUS_CODES.BAD_RESPONSE);
                });
            });

        },
        resetAll: function () {
            return $q(function (resolve, reject) {
                $http.delete('http://localhost:8080/orders/').then(function () {
                    resolve();
                }, function () {
                    reject();
                });
            });
        },
        STATUS_CODES: userCabService.STATUS_CODES
    };
}]);