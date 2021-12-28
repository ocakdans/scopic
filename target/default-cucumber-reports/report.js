$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/reqresgetsingleuser.feature");
formatter.feature({
  "name": "Get single user",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@getSingleUser"
    }
  ]
});
formatter.background({
  "name": "user calls the base url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user calls the base url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ReqResBaseUrl.userCallsTheBaseUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get single user success",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@getSingleUser"
    }
  ]
});
formatter.step({
  "name": "user call get single user request",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.userCallGetSingleUserRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the single user response",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.userGetsTheSingleUserResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifies the names of the id",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.verifiesTheNamesOfTheId()"
});
formatter.result({
  "status": "passed"
});
});