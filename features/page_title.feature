Feature: Search page has the correct title
  When I go to the search page
  I want to see the title

  Scenario: Viewing page title
    Given I am on the search page
    When I do nothing
    Then I should see "Georgian Morphology" as the title
