import { fake_words_api_search } from './fake_words_api/search.js';
import { search_results_container } from './search_results_container.js';

function perform_search(search_word) {
  let response = fake_words_api_search(search_word);

  return response;
}

let search_input = {

  selector: '.js-perform-search',

  bind_to_search_method: function() {
    $(this.selector).change(function() {
      let search_query = this.value;
      let response = perform_search(search_query);
      let search_results = get_search_results_from_response(response);
      let search_word = filter_word_by_text(search_results, search_query);

      search_results_container.fill(search_word, search_results);
    });
  }

}

function filter_word_by_text(words, word_text) {
  return words.filter(function(word) {
    return word['text'] == word_text;
  })[0];
}

function get_search_results_from_response(response) {
  return response['search_results'];
}

$(document).ready(function() {
  search_input.bind_to_search_method();
});
