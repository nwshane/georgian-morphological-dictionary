import { words } from './demo_words';

function find_related_words(search_word_info) {
  let search_word_lemma = search_word_info['lemma'];

  let related_words = words.filter(function(word) {
    return (word['text'] == search_word_lemma || word['lemma'] == search_word_lemma);
  });

  return related_words
}

function find_word_info(search_word) {
  let search_word_info = words.filter(function(word) {
    return (word['text'] == search_word);
  })[0];

  return search_word_info;
}

function fake_words_api_search(search_word) {
  let search_word_info = find_word_info(search_word);

  return {
    search_results: find_related_words(search_word_info)
  };
}

export { fake_words_api_search };
