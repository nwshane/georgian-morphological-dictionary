let search_results_container = {

  selector: '.js-fill-with-search-results',

  template:
  "<h2 class='heading mod-search-results'>{{search_word_text}}</h2>\
  <section>\
    <h3>Word Info</h3>\
    <p>Type: {{search_word_type}}</p>\
  </section>",

  fill: function(search_word, search_results) {
    let data = {
      search_word_text: search_word['text'],
      search_word_type: search_word['type'],
      search_results: search_results
    };

    let template = Handlebars.compile(this.template);
    let result = template(data);

    this.change_html(result);
  },

  change_html: function(new_html) {
    $(this.selector).html(new_html);
  },
}

export { search_results_container };
