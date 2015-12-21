Feature: Search page has the correct heading
  When I go to the search page
  I want to read the page's heading

  Scenario: Reading page heading
    Given I am on the search page
    When I do nothing
    Then I should see "Georgian Morphology Dictionary" as the page's heading
