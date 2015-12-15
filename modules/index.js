import { fake_words_api_search } from './fake_words_api/search.js';

function search_for_word(search_word) {
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

let search_results_container = {
  selector: '.js-fill-with-search-results',
  change_html: function(new_html) {
    $(this.selector).html(new_html);
  }
}

function display_word_search_results(search_word_text, search_results) {
  let search_word = filter_word_by_text(search_results, search_word_text);

  let data = {
    search_word_text: search_word['text'],
    search_word_type: search_word['type'],
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

  search_results_container.change_html(result);
}

function search_for_word_and_display_results(word) {
  let response = search_for_word(word);
  let search_results = get_search_results_from_response(response);

  display_word_search_results(word, search_results);
}

function bind_word_search_to_search_input() {
  $('.js-search-for-word').change(function() {
    search_for_word_and_display_results($(this).val());
  });
}

$(document).ready(function() {
  bind_word_search_to_search_input();
});
