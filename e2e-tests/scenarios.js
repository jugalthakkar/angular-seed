'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('cabs-ui app', function() {


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('user', function() {

    beforeEach(function() {
      browser.get('index.html#!/');
    });


    it('view should have one map', function() {
      expect(element.all(by.css('ng-map')).count()).
        toBe(1);
    });

  });


  describe('admin', function() {

    beforeEach(function() {
      browser.get('index.html#!/admin');
    });


      it('view should have one map', function() {
          expect(element.all(by.css('ng-map')).count()).
          toBe(1);
      });

  });
});
