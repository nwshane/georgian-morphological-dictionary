import { searchInput } from './search_input.js';
import { searchResultsProcessor } from './search_results_processor.js';
import { searchResultsContainer } from './search_results_container.js';

function getURLParameter(name) {
  return decodeURIComponent(
    (new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`)
    .exec(location.search) || [, ''])[1].replace(/\+/g, '%20')) || null;
}

$(document).ready(function () {
  searchResultsContainer.initialize();

  searchInput.bindToSearchMethod(
    searchResultsProcessor,
    searchResultsContainer
  );

  if (getURLParameter('q')) {
    searchInput.runSearch(
      getURLParameter('q'),
      searchResultsProcessor,
      searchResultsContainer
    );
  }
});
