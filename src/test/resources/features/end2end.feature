@end2end
Feature: Add to Cart process

  Scenario Outline: Add to Cart Success
    When user is on the amazon homepage
    And user hover over account&lists
    And user clicks on Sign in button
    And user enters valid "<e-mail>" address
    And user clicks on Continue button
    And user enters "<password>"
    And user clicks on second Sign in button
    Then user verifies name
    Then user searches for "toys" from searchbox
    And user selects any of the products
    And user clicks on add to cart button
    And user verifies the product is added to cart
    Then user closes the driver

    Examples:
      | e-mail                    | password   |
      | selim.ocakdan@gmail.com   | Aso350000n |