'use strict';

module.exports = function() {

  this.Given(/^I am on the search page$/, function (callback) {
    this.visit_search_page(callback);
  });

  this.When(/^I do nothing$/, function (callback) {
    callback();
  });

  this.Then(/^I should see "([^"]*)" as the title$/, function (title_text, callback) {
    this.browser.assert.text('title', title_text);
    callback();
  });

  this.Then(/^I should see "([^"]*)" as the page's heading$/, function (page_heading_text, callback) {
    this.browser.assert.text('h1', page_heading_text);
    callback();
  });

  this.When(/^I search for გაკეთება$/, function (callback) {
    this.browser.fill('.js-perform-search', 'გაკეთება');
    callback();
  });

  this.Then(/^I should see "([^"]*)" in the results$/, function (arg1, callback) {
    this.browser.assert.text('p', 'Type: ' + arg1);
    callback();
  });

  this.When(/^I search for აკეთებს$/, function (callback) {
  });

};
