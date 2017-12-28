'use strict';

describe('myApp.user module', function () {

    beforeEach(function(){
        module('myApp.user');
    });

    describe('user controller', function () {

        it('should ....', inject(function ($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            var userCabService = {
                getAvailableCabs: function(){
                    return {
                        then: function(resolve, reject){
                            resolve([]);
                        }
                    }
                }
            };
            var configService = {
              defaultLocation: [0, 0],
              serviceBaseUrl: 'http://example.com/'
            };
            var userCtrl = $controller('UserCtrl', {
                $scope: scope,
                userCabService: userCabService,
                configService: configService
            });
            expect(userCtrl).toBeDefined();
        }));

    });
});