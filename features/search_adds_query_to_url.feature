@search_adds_query_to_url

Feature: The query of a search should be added to the URL
  When I perform a search
  The value of parameter q in the URL should be the search query

  Scenario: Seeing new search query in URL
    Given I am on the search page
    When I search for "გავაკეთე"
    Then the value of parameter q in the URL should be "გავაკეთე"
