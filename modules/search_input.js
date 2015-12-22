import { fake_words_api_search } from './fake_words_api/search.js';

let search_input = {

  selector: '.js-perform-search',

  perform_search: function(search_word) {
    return fake_words_api_search(search_word);
  },

  bind_to_search_method: function(search_results_processor, search_results_container) {
    let that = this;

    $(this.selector).change(function() {
      let search_query = this.value;
      let response = that.perform_search(search_query);

      let processed_results = search_results_processor.process_response(
        response,
        search_query
      );

      search_results_container.fill(processed_results);
    });
  }

}

export { search_input };
