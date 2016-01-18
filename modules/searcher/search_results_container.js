let search_results_container = {

  selector: '.js-fill-with-search-results',

  generate_list_from_array: function(array, get_content) {
    var html = "<ul>";

    for (let i = 0; i < array.length; i++) {
      html = html + "<li>" + get_content(array[i]) + "</li>";
    }

    return html + "</ul>";
  },

  initialize: function() {
    let that = this;

    Handlebars.registerHelper('list', function(context, options) {
      return that.generate_list_from_array(context, options.fn);
    });

    Handlebars.registerHelper('verb_block', function(context, options) {
      let html = '<h4>' + context.tense + '</h4>';
      html += that.generate_list_from_array(context.words, options.fn);

      return html;
    });
  },

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
