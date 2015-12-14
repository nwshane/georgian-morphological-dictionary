import { fake_words_api_search } from './fake_words_api/search.js';

function search_for_word(search_word) {
  let response = fake_words_api_search(search_word);

  return response;
}

function display_word_search_results(search_word_text, response) {
  let search_results = response['search_results'];

  let data = {
    search_word_text: search_word_text,
    search_word_type: 'This type!',
    search_results: search_results
  };

  let results_html = "<h2 class='heading mod-search-results'>{{search_word_text}}</h2>";
  results_html +=
  "<section>\
    <h3>Word Info</h3>\
    <p>Type: {{search_word_type}}</p>\
  </section>"

  let template = Handlebars.compile(results_html);

  let result = template(data);

  $('.js-fill-with-search-results').html(result);
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
