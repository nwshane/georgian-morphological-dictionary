import { fake_words_api_search } from './fake_words_api/search.js';

function search_for_word(search_word) {
  return fake_words_api_search(search_word);
}

function display_word_info(word_results) {
  let search_word_info = word_results[0];
  let related_words = word_results[1];
  $('.js-fill-with-search-results').html('<h2>' + search_word_info['word'] + '</h2>')
}

function bind_word_search_to_search_input() {
  $('.js-search-for-word').change(function() {
      let search_word = $(this).val();
      display_word_info(search_for_word(search_word));
  });
}

$(document).ready(function() {
  bind_word_search_to_search_input();
});
