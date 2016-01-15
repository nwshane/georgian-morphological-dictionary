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

function filter_by_tense(tense, words) {
  let filtered_words = words.filter(function(word) {
    return (word['დრო'] === tense);
  });

  return filtered_words;
}

function organize_words(words) {
  let organized_words = {
    verbs: [
      {
        tense: 'აწმყო',
        words: filter_by_tense('აწმყო', words)
      }
    ]
  }

  return organized_words;
}

function fake_words_api_search(search_word) {
  let search_word_info = find_word_info(search_word);

  let words = find_related_words(search_word_info);
  words = organize_words(words);

  return {
    search_word: search_word_info,
    search_results: words
  };
}

export { fake_words_api_search };
