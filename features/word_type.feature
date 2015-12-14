Feature: Search displays word type
  When I search for a word
  I want to see the type of the word

  Scenario: Determining word type of გაკეთება
    Given I am on the search page
    When I search for გაკეთება
    Then I should see "ზმნის პუძე" in the results

  Scenario: Determining word type of აკეთებს
    Given I am on the search page
    When I search for აკეთებს
    Then I should see "ზმნა" in the results
