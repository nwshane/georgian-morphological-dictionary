import { search_input } from './search_input.js';
import { search_results_processor } from './search_results_processor.js';
import { search_results_container } from './search_results_container.js';

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

$(document).ready(function() {
  search_results_container.initialize();

  search_input.bind_to_search_method(
    search_results_processor,
    search_results_container
  );

  if (getURLParameter('q')) {
    search_input.run_search(
      getURLParameter('q'),
      search_results_processor,
      search_results_container
    );
  }
});
