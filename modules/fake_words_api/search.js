import { words } from './demo_words';

function fake_words_api_search(search_word) {
  // go through words to find the word
  // get lemma
  // find all words with the same lemma
  // get em all in an array
  // return the array
  let search_word_info = words.filter(function(word) {
    return (word['word'] == search_word);
  })[0];

  let search_word_lemma = search_word_info['lemma'];

  let related_words = words.filter(function(word) {
    return (word['word'] == search_word_lemma || word['lemma'] == search_word_lemma);
  });

  return {
    search_word: search_word_info,
    related_words: related_words
  };
}

export { fake_words_api_search };
