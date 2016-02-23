let searchResultsContainer = {

  selector: '.js-fill-with-search-results',

  initialize: function () {
    Handlebars.registerHelper('outputWord', function (word, context) {
      const searchWord = context.data.root.search_word_text;
      let html = word.text;

      if (html === searchWord) {
        html = '<strong>' + html + '</strong>';
      }

      return new Handlebars.SafeString(html);
    });
  },

  template: function () {
    return $('#js-template-search-results').html();
  },

  compileResultsIntoHtml: function (results) {
    const template = Handlebars.compile(this.template());
    return template(results);
  },

  changeHtml: function (newHtml) {
    $(this.selector).html(newHtml);
  },

  fill: function (results) {
    const newHtml = this.compileResultsIntoHtml(results);
    this.changeHtml(newHtml);
  },
};

export { searchResultsContainer };
