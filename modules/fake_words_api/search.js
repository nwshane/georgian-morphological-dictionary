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

function findWordsWithLemma(lemma) {
  return words.filter(function (word) {
    return (word['lemma'] === lemma);
  });
}

function concatWordsRelatedByLemma(array, lemmaText) {
  let lemma = findWordByText(searchWord['lemma']);

  let relatedWords = [lemma].concat(findWordsWithLemma(lemma['text']));

  return array.concat();
}

function findRelatedWords(searchWord) {
  let relatedWords = [searchWord];
  relatedWords = relatedWords.concat(findWordsWithLemma(searchWord['text']));

  if (searchWord['lemma'] === undefined || searchWord['lemma'] === '???') {
    return relatedWords;
  }

  let lemmaOfSearchWord = findWordByText(searchWord['lemma']);

  relatedWords.push(lemmaOfSearchWord);

  relatedWords = relatedWords.concat(findWordsWithLemma(lemmaOfSearchWord['text'])).unique();

  return relatedWords;
}

function findWordByText(wordText) {
  return words.filter(function (word) {
    return (word['text'] === wordText);
  })[0];
}

function filterByTense(tense, words) {
  let filteredWords = words.filter(function (word) {
    return (word['დრო'] === tense);
  });

  return filteredWords;
}

function getUniqueTenses(words) {
  let tenses = words.map(function (word) {
    return word['დრო'];
  });

  let uniqueTenses = [];

  for (let i = 0; i < tenses.length; i++) {
    if ($.inArray(tenses[i], uniqueTenses) === -1) {
      uniqueTenses.push(tenses[i]);
    }
  }

  return uniqueTenses;
}

function getVerbGroups(words) {
  let tenses = getUniqueTenses(words);
  let verbGroups = [];

  for (let i = 0; i < tenses.length; i++) {
    verbGroups.push({
      tense: tenses[i],
      words: filterByTense(tenses[i], words)
    });
  }

  return verbGroups;
}

function organizeWords(words) {
  let organizedWords = {
    verbs: getVerbGroups(words)
  };

  return organizedWords;
}

function fakeWordsApiSearch(searchQuery) {
  let searchWord = findWordByText(searchQuery);

  let words = findRelatedWords(searchWord);
  words = organizeWords(words);

  return {
    searchWord: searchWord,
    searchResults: words
  };
}

export { fakeWordsApiSearch };
