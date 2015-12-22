Feature: Verb search displays present tense conjugations of that verb
  When I search for a verb
  I want to see the present tense conjugations of that verb

  Scenario Outline: Viewing present tense conjugations of "<search_query>"
    Given I am on the search page
    When I search for "<search_query>"
    Then I should see "<result>" in the results

    Examples:
      | search_query | result |
      | გაკეთება     | ვაკეთებ |
      | გაკეთება     | აკეთებ |
      | გაკეთება     | აკეთებს |
      | გაკეთება     | ვაკეთებთ |
      | გაკეთება     | აკეთებთ |
      | გაკეთება     | აკეთებენ |
      | აკეთებს      | აკეთებენ |
      | აკეთებ       | ვაკეთებ |
      | აკეთებენ     | ვაკეთებთ |
      | აკეთებთ      | აკეთებს |
      | ვაკეთებ      | აკეთებთ |
