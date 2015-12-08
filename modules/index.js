import { words } from './demo_words';

function search_for_word(search_word) {
  // go through words to find the word
  // get lemma
  // find all words with the same lemma
  // get em all in an array
  // return the array
  let selected_words = words.filter(function(word) {
    return (word['word'] == search_word);
  });

  console.log(selected_words)
  return selected_words;
}

$(document).ready(function() {

  $('.js-search-for-word').change(function() {
      let search_word = $(this).val();
      let selected_words = search_for_word(search_word);
      console.log(selected_words);
  });

});
