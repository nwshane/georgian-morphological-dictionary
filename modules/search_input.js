let search_input = {

  selector: '.js-perform-search',

  bind_to_search_method: function(perform_search, search_results_processor, search_results_container) {
    $(this.selector).change(function() {
      let search_query = this.value;
      let response = perform_search(search_query);

      let processed_results = search_results_processor.process_response(response, search_query);

      search_results_container.fill(processed_results);
    });
  }

}

export { search_input };
