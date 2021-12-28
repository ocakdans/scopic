@putSingleUser
Feature: Put single user success
  Background: user calls the base url
    Given user calls the base url
  Scenario: user update
    When user call put single user request
    Then verifies the response with expected data