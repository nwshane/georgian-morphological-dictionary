import { search_input } from './search_input.js';
import { search_results_processor } from './search_results_processor.js';
import { search_results_container } from './search_results_container.js';

function url_query_parameter() {
  return 'ვაკეთებ';
}

$(document).ready(function() {
  search_results_container.initialize();

  search_input.bind_to_search_method(
    search_results_processor,
    search_results_container
  );

  if (url_query_parameter()) {
    search_input.run_search(
      url_query_parameter(),
      search_results_processor,
      search_results_container
    );
  }
});
