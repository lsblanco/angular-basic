'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./home.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.pEl.getText()).toBe('SUITE');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/serenity\/serenity.png$/);
    //expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });

  it('should list more than 5 awesome things', function () {
    expect(page.thumbnailEls.count()).toBeGreaterThan(5); 
  });

});
