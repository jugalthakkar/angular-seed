'use strict';

var myApp = angular.module('myApp');
myApp.factory('userCabService', ['$http', '$q', 'configService', function ($http, $q, configService) {
    var STATUS_CODES = {
        BAD_RESPONSE: 'BAD_RESPONSE',
        NO_CABS: 'NO_CABS',
    };
    return {
        getAvailableCabs: function (location) {
            return $q(function (resolve, reject) {
                $http.get(configService.serviceBaseUrl + 'drivers/available').then(function (result) {
                    if (!result.data || !result.data.length) {
                        reject(STATUS_CODES.NO_CABS);
                    } else {
                        resolve(result.data);
                    }
                }, function (result) {
                    reject(STATUS_CODES.BAD_RESPONSE);
                });
            });
        },
        bookACab: function (location, name) {
            return $q(function (resolve, reject) {
                $http.post(
                    configService.serviceBaseUrl + 'orders/',
                    {
                        position: location,
                        customerName: name
                    }
                ).then(function (result) {
                    if (result.data && result.data.driver) {
                        resolve(result.data);
                    } else {
                        reject(STATUS_CODES.NO_CABS);
                    }
                }, function () {
                    reject(STATUS_CODES.BAD_RESPONSE);
                });
            });
        },
        STATUS_CODES: STATUS_CODES
    };
}]);