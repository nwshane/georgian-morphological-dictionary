let search_results_container = {

  selector: '.js-fill-with-search-results',

  template:
  "<h2 class='heading mod-search-results'>{{search_word_text}}</h2>\
  <section>\
    <h3>Word Info</h3>\
    <p>Type: {{search_word_type}}</p>\
  </section>",

  compile_results_into_html: function(results) {
    let template = Handlebars.compile(this.template);
    return template(results);
  },

  fill: function(results) {
    let new_html = this.compile_results_into_html(results);
    this.change_html(new_html);
  },

  change_html: function(new_html) {
    $(this.selector).html(new_html);
  },
}

export { search_results_container };
