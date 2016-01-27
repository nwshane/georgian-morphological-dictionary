const Browser = require('zombie');
var assert = require('assert');

Browser.localhost('127.0.0.1', 8080);

function addAssertionTextContains() {
  Browser.Assert.prototype.textContains = function (element, string) {
    assert.ok(this.browser.text(element).includes(string));
  };
}

function add_parameters(url, parameters) {
  for (var i = 0; i < parameters.length; i++) {
    if (i === 0) {
      url += '?';
    } else {
      url += '&';
    }

    url += parameters[i]['param'];
    url += '=';
    url += parameters[i]['value'];
  }

  return url;
}

function World() {
  addAssertionTextContains();

  this.browser = new Browser();

  this.visit_search_page = function (callback, parameters) {
    var url = '/';

    if (parameters) {
      url = add_parameters(url, parameters);
    }

    this.browser.visit(url, callback);
  };
}

module.exports = function () {
  this.World = World;
};
