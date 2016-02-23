
let searchResultsProcessor = {
  getSearchResultsFromResponse: function (response) {
    return response.searchResults;
  },

  processResponse: function (response, searchQuery) {
    let searchResults = this.getSearchResultsFromResponse(response);
    let searchWord = response.searchWord;
    
    let data = {
      searchWordText: searchWord.text,
      searchWordType: searchWord.type,
      searchResults: searchResults
    };

    return data;
  }
};

export { searchResultsProcessor };
