import { fakeWordsApiSearch } from '../fake_words_api/search.js';
import { QueryString } from '../utilities/QueryString.js';

const searchInput = {

  selector: '.js-perform-search',

  sendSearchQuery(searchWord) {
    return fakeWordsApiSearch(searchWord);
  },

  bindToSearchMethod(searchResultsProcessor, searchResultsContainer) {
    const that = this;

    $(this.selector).change(function () {
      that.runSearch(this.value, searchResultsProcessor, searchResultsContainer);
    });
  },

  runSearch(searchQuery, searchResultsProcessor, searchResultsContainer) {
    this.updateQParamInUrl(searchQuery);

    const response = this.sendSearchQuery(searchQuery);

    const processedResults = searchResultsProcessor.processResponse(
      response,
      searchQuery
    );

    searchResultsContainer.fill(processedResults);
  },

  updateQParamInUrl(searchQuery) {
    const currentQValue = QueryString.q;
    if (currentQValue !== searchQuery) {
      const urlPath = `/?q=${searchQuery}`;

      window.history.pushState({}, '', urlPath);
    }
  }
};

export { searchInput };
