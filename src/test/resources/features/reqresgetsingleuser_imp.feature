@getSingleUser
Feature: Get single user
  Background: user calls the base url
    Given user calls the base url
  @getSingleUser_imp1
  Scenario Outline: Get single user success
    When user call the endpoint with "<pathParName1>" for parameters "<pathParam1>" and "<pathParName2>" for "<pathParam2>"
    And user gets the single user response with path parameters "<pathParName1>" and "<pathParName2>"
    Then verifies the names of the id when "<jsonPath1>" for "<testData1>" and "<jsonPath2>" for "<testData2>"
    Examples:
      | pathParName1 | pathParam1 | pathParName2 | pathParam2 | jsonPath1       | testData1 | jsonPath2      | testData2    |
      | usersPath    | users      | id           | 2          | data.first_name | Janet     | data.last_name | Weaver       |
      | ppName1      | unknown    | ppName2      | 2          | data.color      | #C74375   | data.name      | fuchsia rose |

  @getSingleUser_imp2
  Scenario: Get single user success
    When user call the endpoint with "usersPath" for parameters "users" and "id" for "2"
    #When user call get single user request for path parameter name "usersPath" , path parameter is "users" and path parameter name "id" , path parameter is "2"
    #And user gets the single user response path parameter name "usersPath" , path parameter is "id"
    And user gets the single user response with path parameters "usersPath" and "id"
    Then verifies the data for that user
      | data.first_name | Janet                  |
      | data.last_name  | Weaver                 |
      | data.id         | 2                      |
      | data.email      | janet.weaver@reqres.in |

