
const searchResultsProcessor = {
  getSearchResultsFromResponse(response) {
    return response.searchResults;
  },

  processResponse(response, searchQuery) {
    const searchResults = this.getSearchResultsFromResponse(response);
    const searchWord = response.searchWord;

    const data = {
      searchWordText: searchWord.text,
      searchWordType: searchWord.type,
      searchResults
    };

    return data;
  }
};

export { searchResultsProcessor };
