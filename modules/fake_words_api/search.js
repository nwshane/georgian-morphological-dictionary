import { words } from './demo_words';

// Removes duplicates in array
// Source: http://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
Array.prototype.unique = function () {
  var a = this.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j])
          a.splice(j--, 1);
    }
  }

  return a;
};

function find_words_with_lemma(lemma) {
  return words.filter(function (word) {
    return (word['lemma'] === lemma);
  });
}

function concat_words_related_by_lemma(array, lemma_text) {
  let lemma = find_word_by_text(search_word['lemma']);

  let related_words = [lemma].concat(find_words_with_lemma(lemma['text']));

  return array.concat();
}

function find_related_words(search_word) {
  let related_words = [search_word];
  related_words = related_words.concat(find_words_with_lemma(search_word['text']));

  if (search_word['lemma'] === undefined || search_word['lemma'] === '???') {
    return related_words;
  }

  let lemma_of_search_word = find_word_by_text(search_word['lemma']);

  related_words.push(lemma_of_search_word);

  related_words = related_words.concat(find_words_with_lemma(lemma_of_search_word['text'])).unique();

  return related_words;
}

function find_word_by_text(word_text) {
  return words.filter(function (word) {
    return (word['text'] === word_text);
  })[0];
}

function filter_by_tense(tense, words) {
  let filtered_words = words.filter(function (word) {
    return (word['დრო'] === tense);
  });

  return filtered_words;
}

function get_unique_tenses(words) {
  let tenses = words.map(function (word) {
    return word['დრო'];
  });

  let unique_tenses = [];

  for (let i = 0; i < tenses.length; i++) {
    if ($.inArray(tenses[i], unique_tenses) === -1) {
      unique_tenses.push(tenses[i]);
    }
  }

  return unique_tenses;
}

function get_verb_groups(words) {
  let tenses = get_unique_tenses(words);
  let verb_groups = [];

  for (let i = 0; i < tenses.length; i++) {
    verb_groups.push({
      tense: tenses[i],
      words: filter_by_tense(tenses[i], words)
    });
  }

  return verb_groups;
}

function organize_words(words) {
  let organized_words = {
    verbs: get_verb_groups(words)
  };

  return organized_words;
}

function fake_words_api_search(search_query) {
  let search_word = find_word_by_text(search_query);

  let words = find_related_words(search_word);
  words = organize_words(words);

  return {
    search_word: search_word,
    search_results: words
  };
}

export { fake_words_api_search };
