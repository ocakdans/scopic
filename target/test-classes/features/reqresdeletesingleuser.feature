@deleteSingleUser
Feature: Delete single user success
  Background: user calls the base url
    Given user calls the base url
  Scenario: delete the user
    When user call delete single user request
    #Then verifies the delete response with expected data