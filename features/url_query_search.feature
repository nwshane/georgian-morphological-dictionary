Feature: I see the results of a search included in the URL as query
  When I include a value in the URL's query parameter
  I want to see the results for that query

  Scenario: Seeing results for URL with query
    Given nothing
    When I navigate to a URL with the query "აკეთებს"
    Then I should see "აკეთებს" as the search results heading
