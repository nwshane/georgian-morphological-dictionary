import { search_results_processor } from './search_results_processor.js';
import { search_results_container } from './search_results_container.js';
import { search_input } from './search_input.js';

$(document).ready(function() {
  search_input.bind_to_search_method(
    search_results_processor,
    search_results_container
  );
});
