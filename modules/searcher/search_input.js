import { fake_words_api_search } from '../fake_words_api/search.js';

let search_input = {

  selector: '.js-perform-search',

  send_search_query: function(search_word) {
    return fake_words_api_search(search_word);
  },

  bind_to_search_method: function(search_results_processor, search_results_container) {
    let that = this;

    $(this.selector).change(function() {
      that.run_search(this.value, search_results_processor, search_results_container);
    });
  },

  run_search: function(search_query, search_results_processor, search_results_container) {
    this.update_q_param_in_url(search_query);

    let response = this.send_search_query(search_query);

    let processed_results = search_results_processor.process_response(
      response,
      search_query
    );

    search_results_container.fill(processed_results);
  },

  update_q_param_in_url: function(search_query) {
    let current_q_value = QueryString.q;
    if (current_q_value !== search_query) {
      let urlPath = '/?q=' + search_query;

      window.history.pushState({}, "", urlPath);
    }
  }
}

var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
    return query_string;
}();

export { search_input };
