@getSingleUser
Feature: Get single user
  Background: user calls the base url
    Given user calls the base url
  Scenario: Get single user success
    When user call get single user request
    And user gets the single user response
    Then verifies the names of the id
