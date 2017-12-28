'use strict';

describe('myApp.user module', function() {

    beforeEach(module('myApp.user'));

    describe('user controller', function(){

        it('should ....', inject(function($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            var userCtrl = $controller('UserCtrl', { $scope: scope });
            expect(userCtrl).toBeDefined();
        }));

    });
});