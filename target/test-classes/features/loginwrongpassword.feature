@wrongPassword
Feature: Amazon Fail Login Wrong Password

  Scenario Outline: Fail Login via Email
    When user is on the amazon homepage
    And user hover over account&lists
    And user clicks on Sign in button
    And user enters valid "<e-mail>" address
    And user clicks on Continue button
    And user enters "<password>"
    And user clicks on second Sign in button
    #And user clicks on not now link
    Then user gets password error

    Examples:
      | e-mail                  | password    |
      | selim.ocakdan@gmail.com | Aso350000n2 |



