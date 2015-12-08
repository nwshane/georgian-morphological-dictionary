import { fake_words_api_search } from './fake_words_api/search.js';

function search_for_word(search_word) {
  let response = fake_words_api_search(search_word)

  return response;
}

function display_word_info(results) {
  let search_word_info = results['search_word'];
  let related_words = results['related_words'];
  $('.js-fill-with-search-results').html('<h2>' + search_word_info['word'] + '</h2>')
}

function search_for_word_and_display_results(word) {
  let response = search_for_word(word);
  display_word_info(response);
}

function bind_word_search_to_search_input() {
  $('.js-search-for-word').change(function() {
    search_for_word_and_display_results($(this).val());
  });
}

$(document).ready(function() {
  bind_word_search_to_search_input();
});
