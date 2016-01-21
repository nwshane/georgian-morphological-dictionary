const Browser = require('zombie');
var assert = require('assert');

Browser.localhost('127.0.0.1', 8080);

function addAssertionTextContains() {
  Browser.Assert.prototype.textContains = function(element, string) {
    assert.ok(this.browser.text(element).includes(string));
  }
}

function World() {
  addAssertionTextContains();

  this.browser = new Browser();

  this.visit_search_page = function(callback) {
    this.browser.visit('/', callback);
  }
}

module.exports = function() {
  this.World = World;
};
