import { fakeWordsApiSearch } from '../fake_words_api/search.js';
import { QueryString } from '../utilities/QueryString.js';

let searchInput = {

  selector: '.js-perform-search',

  sendSearchQuery: function (searchWord) {
    return fakeWordsApiSearch(searchWord);
  },

  bindToSearchMethod: function (searchResultsProcessor, searchResultsContainer) {
    let that = this;

    $(this.selector).change(function () {
      that.runSearch(this.value, searchResultsProcessor, searchResultsContainer);
    });
  },

  runSearch: function (searchQuery, searchResultsProcessor, searchResultsContainer) {
    this.updateQParamInUrl(searchQuery);

    let response = this.sendSearchQuery(searchQuery);

    let processedResults = searchResultsProcessor.processResponse(
      response,
      searchQuery
    );

    searchResultsContainer.fill(processedResults);
  },

  updateQParamInUrl: function (searchQuery) {
    let currentQValue = QueryString.q;
    if (currentQValue !== searchQuery) {
      let urlPath = '/?q=' + searchQuery;

      window.history.pushState({}, '', urlPath);
    }
  }
};

export { searchInput };
