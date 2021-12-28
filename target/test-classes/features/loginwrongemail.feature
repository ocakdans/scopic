@wrongEmail
Feature: Amazon Fail Login Wrong Email

  Scenario Outline: Fail Login via Email Wrong Email
    When user is on the amazon homepage
    And user hover over account&lists
    And user clicks on Sign in button
    And user enters valid "<e-mail>" address
    And user clicks on Continue button
    Then user gets email error

    Examples:
      | e-mail                     |
      | selim.ocakdan333@gmail.com |



