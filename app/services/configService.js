'use strict';

var myApp = angular.module('myApp');
myApp.factory('configService', function () {
    return {
        serviceBaseUrl: 'https://cabs-service.herokuapp.com/',
        // serviceBaseUrl: 'http://localhost:8080/',
        defaultLocation: [19.1112551, 72.9064666]
    };
});