@postSingleUser
Feature: Post single user success
  Background: user creates the base url
    Given user calls the base url
  Scenario: user creation
    When user call post single user request
    Then verifies the response with expected data