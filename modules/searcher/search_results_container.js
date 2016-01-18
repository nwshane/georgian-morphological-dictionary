let search_results_container = {

  selector: '.js-fill-with-search-results',

  template: function() {
    return $('#js-template-search-results').html();
  },

  compile_results_into_html: function(results) {
    let template = Handlebars.compile(this.template());
    return template(results);
  },

  change_html: function(new_html) {
    $(this.selector).html(new_html);
  },

  fill: function(results) {
    let new_html = this.compile_results_into_html(results);
    this.change_html(new_html);
  },
}

export { search_results_container };
