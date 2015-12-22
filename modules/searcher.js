import { fake_words_api_search } from './fake_words_api/search.js';
import { search_results_container } from './search_results_container.js';
import { search_input } from './search_input.js';

function perform_search(search_word) {
  return fake_words_api_search(search_word);
}

let search_results_processor = {

  filter_word_by_text: function(words, word_text) {
    return words.filter(function(word) {
      return word['text'] == word_text;
    })[0];
  },

  get_search_results_from_response: function(response) {
    return response['search_results'];
  },

  process_response: function(response, search_query) {
    let search_results = this.get_search_results_from_response(response);
    let search_word = this.filter_word_by_text(search_results, search_query);

    let data = {
      search_word_text: search_word['text'],
      search_word_type: search_word['type'],
      search_results: search_results
    };

    return data;
  }
}

$(document).ready(function() {
  search_input.bind_to_search_method(
    perform_search,
    search_results_processor,
    search_results_container
  );
});
