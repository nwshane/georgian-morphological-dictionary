import { words } from './demo_words';

function search(word) {
  // go through words to find the word
  // get lemma
  // find all words with the same lemma
  // get em all in an array
  // return the array
  let selected_words = words.filter(function(x) {
    return (x['word'] == word);
  });
  debugger;
  return selected_words;
}

search('არის');
