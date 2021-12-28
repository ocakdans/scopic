@patchSingleUser
Feature: Patch single user success
  Background: user calls the base url
    Given user calls the base url
  Scenario: user update only name
    When user call patch single user request
    Then verifies the patch response with expected data