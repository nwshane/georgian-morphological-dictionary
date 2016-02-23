import { wordResultsTemplate } from './word_results_template.js';

const searchResultsContainer = {

  selector: '.js-fill-with-search-results',

  initialize() {
    Handlebars.registerHelper('outputWord', function (word, context) {
      const searchWord = context.data.root.search_word_text;
      let html = word.text;

      if (html === searchWord) {
        html = `<strong>${html}</strong>`;
      }

      return new Handlebars.SafeString(html);
    });
  },

  changeHtml(newHtml) {
    $(this.selector).html(newHtml);
  },

  fill(results) {
    const newHtml = wordResultsTemplate.compileResultsIntoHtml(results);
    this.changeHtml(newHtml);
  },
};

export { searchResultsContainer };
