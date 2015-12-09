import { fake_words_api_search } from './fake_words_api/search.js';

function search_for_word(search_word) {
  let response = fake_words_api_search(search_word)

  return response;
}

function display_word_search_results(word, results) {
  let related_words = results['related_words'];
  let word_html = '<h2>Results for "' + word + '":</h2>';

  for (var i = 0; i < related_words.length; i++) {
    word_html += ('<p>' + related_words[i]['text'] + '</p>');
  }

  $('.js-fill-with-search-results').html(word_html);
}

function search_for_word_and_display_results(word) {
  let response = search_for_word(word);
  display_word_search_results(word, response);
}

function bind_word_search_to_search_input() {
  $('.js-search-for-word').change(function() {
    search_for_word_and_display_results($(this).val());
  });
}

$(document).ready(function() {
  bind_word_search_to_search_input();
});
