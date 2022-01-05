$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/reqresgetsingleuser_imp.feature");
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
  "status": "skipped"
});
formatter.scenario({
  "name": "Get single user success",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@getSingleUser"
    },
    {
      "name": "@getSingleUser_imp2"
    }
  ]
});
formatter.step({
  "name": "user call the endpoint with \"usersPath\" for parameters \"users\" and \"id\" for \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.userCallTheEndpointWithForPathParametersAndFor(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets the single user response with path parameters \"usersPath\" and \"id\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.user_gets_the_single_user_response_with_path_parameters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verifies the data for that user",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});