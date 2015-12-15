let search_results_container = {
  selector: '.js-fill-with-search-results',
  change_html: function(new_html) {
    $(this.selector).html(new_html);
  }
}

export { search_results_container };
