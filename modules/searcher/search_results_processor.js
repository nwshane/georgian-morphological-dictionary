
let search_results_processor = {
  get_search_results_from_response: function(response) {
    return response['search_results'];
  },

  process_response: function(response, search_query) {
    let search_results = this.get_search_results_from_response(response);
    let search_word = response['search_word'];

    let data = {
      search_word_text: search_word['text'],
      search_word_type: search_word['type'],
      search_results: search_results
    };

    return data;
  }
}

export { search_results_processor };
