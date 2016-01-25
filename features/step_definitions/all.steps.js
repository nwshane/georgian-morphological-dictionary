'use strict';

module.exports = function() {

  this.Given(/^I am on the search page$/, function (callback) {
    this.visit_search_page(callback);
  });

  this.Given(/^nothing$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.When(/^I do nothing$/, function (callback) {
    callback();
  });

  this.When(/^I navigate to a URL with the query "([^"]*)"$/, function (query_value, callback) {
    var parameters = [
      {
        'param': 'q',
        'value': query_value
      }
    ]

    this.visit_search_page(callback, parameters);
  });

  this.When(/^I search for "([^"]*)"$/, function (search_query, callback) {
    this.browser.fill('.js-perform-search', search_query);
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

  this.Then(/^I should see "([^"]*)" in the results$/, function (result, callback) {
    this.browser.assert.textContains('.js-fill-with-search-results', result);
    callback();
  });

  this.Then(/^I should see "([^"]*)" as the word type$/, function (word_type, callback) {
    this.browser.assert.text('p', 'Type: ' + word_type);
    callback();
  });

  this.Then(/^I should see "([^"]*)" as the search results heading$/, function (query, callback) {
    this.browser.assert.text('.heading.mod-search-results', query);
    callback();
  });

};
