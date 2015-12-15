import { fake_words_api_search } from './fake_words_api/search.js';
import { search_results_container } from './search_results_container.js';

function perform_search(search_word) {
  let response = fake_words_api_search(search_word);

  return response;
}

function filter_word_by_text(words, word_text) {
  return words.filter(function(word) {
    return word['text'] == word_text;
  })[0];
}

function get_search_results_from_response(response) {
  return response['search_results'];
}

function search_and_display_results(search_query) {
  let response = perform_search(search_query);
  let search_results = get_search_results_from_response(response);
  let search_word = filter_word_by_text(search_results, search_query);

  search_results_container.fill(search_word, search_results);
}

function bind_word_search_to_search_input() {
  $('.js-search-for-word').change(function() {
    search_and_display_results($(this).val());
  });
}

$(document).ready(function() {
  bind_word_search_to_search_input();
});
