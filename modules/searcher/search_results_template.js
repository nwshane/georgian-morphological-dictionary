const searchResultsTemplate = {
  template() {
    return $(this.selector).html();
  },

  compileResultsIntoHtml(results) {
    const template = Handlebars.compile(this.template());
    return template(results);
  }
};

export { searchResultsTemplate };
