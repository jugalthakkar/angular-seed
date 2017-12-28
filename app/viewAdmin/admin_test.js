'use strict';

describe('myApp.admin module', function() {

    beforeEach(module('myApp.admin'));

    describe('admin controller', function(){

        it('should ....', inject(function($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            var adminCtrl = $controller('AdminCtrl', { $scope: scope });
            expect(adminCtrl).toBeDefined();
        }));

    });
});