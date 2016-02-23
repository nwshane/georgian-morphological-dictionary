const wordResultsTemplate = {
  selector: '#js-template-search-results',

  template() {
    return $(this.selector).html();
  },

  compileResultsIntoHtml(results) {
    const template = Handlebars.compile(wordResultsTemplate.template());
    return template(results);
  }
};

export { wordResultsTemplate };
