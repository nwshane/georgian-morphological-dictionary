Feature: Search displays word type
  When I search for a word
  I want to see the type of the word

  Scenario Outline: Determining word type of "<search_query>"
    Given I am on the search page
    When I search for "<search_query>"
    Then I should see "<result>" as the word type

    Examples:
      | search_query | result |
      | გაკეთება     | ზმნის პუძე |
      | აკეთებს      | ზმნა |
