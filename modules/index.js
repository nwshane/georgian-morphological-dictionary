import { words } from './demo_words';

function search_for_word(search_word) {
  // go through words to find the word
  // get lemma
  // find all words with the same lemma
  // get em all in an array
  // return the array
  let search_word_info = words.filter(function(word) {
    return (word['word'] == search_word);
  });

  let search_word_lemma = search_word_info[0]['lemma'];

  let related_words = words.filter(function(word) {
    return (word['word'] == search_word_lemma || word['lemma'] == search_word_lemma);
  })

  return [search_word_info, related_words];
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
