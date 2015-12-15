const Browser = require('zombie');

Browser.localhost('127.0.0.1', 8080);

function World() {
  this.browser = new Browser();

  this.visit_search_page = function(callback) {
    this.browser.visit('/', callback);
  }
}

module.exports = function() {
  this.World = World;
};
