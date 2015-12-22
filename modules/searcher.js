import { fake_words_api_search } from './fake_words_api/search.js';
import { search_results_processor } from './search_results_processor.js';
import { search_results_container } from './search_results_container.js';
import { search_input } from './search_input.js';

function perform_search(search_word) {
  return fake_words_api_search(search_word);
}

$(document).ready(function() {
  search_input.bind_to_search_method(
    perform_search,
    search_results_processor,
    search_results_container
  );
});
