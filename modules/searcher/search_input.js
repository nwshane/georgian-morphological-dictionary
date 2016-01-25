import { fake_words_api_search } from '../fake_words_api/search.js';

let search_input = {

  selector: '.js-perform-search',

  send_search_query: function(search_word) {
    return fake_words_api_search(search_word);
  },

  bind_to_search_method: function(search_results_processor, search_results_container) {
    let that = this;

    $(this.selector).change(function() {
      that.run_search(this.value, search_results_processor, search_results_container);
    });
  },

  run_search: function(search_query, search_results_processor, search_results_container) {
    let response = this.send_search_query(search_query);

    let processed_results = search_results_processor.process_response(
      response,
      search_query
    );

    search_results_container.fill(processed_results);
  }
}

export { search_input };
