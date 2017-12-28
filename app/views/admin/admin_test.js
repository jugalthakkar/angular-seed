'use strict';

describe('myApp.admin module', function () {

    beforeEach(function(){
        module('myApp.admin');
    });

    describe('admin controller', function () {

        it('should ....', inject(function ($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            var adminCabService = {
                getAllCabs: function(){
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
            var adminCtrl = $controller('AdminCtrl', {
                $scope: scope,
                configService: configService,
                adminCabService: adminCabService
            });
            expect(adminCtrl).toBeDefined();
        }));

    });
});