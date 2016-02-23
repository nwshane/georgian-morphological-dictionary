import { words } from './demo_words';

// Removes duplicates in array
// Source: http://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
Array.prototype.unique = function () {
  const a = this.concat();
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) {
        a.splice(j--, 1);
      }
    }
  }

  return a;
};

function findWordsWithLemma(lemma) {
  return words.filter(function(word) {
    return (word.lemma === lemma);
  });
}

function findWordByText(wordText) {
  return words.filter(function(word) {
    return (word.text === wordText);
  })[0];
}

function findRelatedWords(searchWord) {
  let relatedWords = [searchWord];
  relatedWords = relatedWords.concat(findWordsWithLemma(searchWord.text));

  if (searchWord.lemma === undefined || searchWord.lemma === '???') {
    return relatedWords;
  }

  const lemmaOfSearchWord = findWordByText(searchWord.lemma);

  relatedWords.push(lemmaOfSearchWord);

  relatedWords = relatedWords.concat(findWordsWithLemma(lemmaOfSearchWord.text)).unique();

  return relatedWords;
}

function filterByTense(tense, wordsArray) {
  const filteredWords = wordsArray.filter(function(word) {
    return (word['დრო'] === tense);
  });

  return filteredWords;
}

function getUniqueTenses(wordsArray) {
  const tenses = wordsArray.map(function(word) {
    return word['დრო'];
  });

  const uniqueTenses = [];

  for (let i = 0; i < tenses.length; i++) {
    if ($.inArray(tenses[i], uniqueTenses) === -1) {
      uniqueTenses.push(tenses[i]);
    }
  }

  return uniqueTenses;
}

function getVerbGroups(wordsArray) {
  const tenses = getUniqueTenses(wordsArray);
  const verbGroups = [];

  for (let i = 0; i < tenses.length; i++) {
    verbGroups.push({
      tense: tenses[i],
      words: filterByTense(tenses[i], wordsArray)
    });
  }

  return verbGroups;
}

function organizeWords(wordsArray) {
  const organizedWords = {
    verbs: getVerbGroups(wordsArray)
  };

  return organizedWords;
}

function fakeWordsApiSearch(searchQuery) {
  const searchWord = findWordByText(searchQuery);

  const results = organizeWords(
    findRelatedWords(searchWord)
  );

  return {
    searchWord: searchWord,
    searchResults: results
  };
}

export { fakeWordsApiSearch };
