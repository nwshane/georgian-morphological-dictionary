
let searchResultsProcessor = {
  getSearchResultsFromResponse: function (response) {
    return response.searchResults;
  },

  processResponse: function (response, searchQuery) {
    const searchResults = this.getSearchResultsFromResponse(response);
    const searchWord = response.searchWord;
    
    let data = {
      searchWordText: searchWord.text,
      searchWordType: searchWord.type,
      searchResults: searchResults
    };

    return data;
  }
};

export { searchResultsProcessor };
