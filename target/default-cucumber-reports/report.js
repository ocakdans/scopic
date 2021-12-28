$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/reqrespatchsingleuser.feature");
formatter.feature({
  "name": "Patch single user success",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@patchSingleUser"
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
  "name": "user update only name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@patchSingleUser"
    }
  ]
});
formatter.step({
  "name": "user call patch single user request",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.userCallPatchSingleUserRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifies the patch response with expected data",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.verifiesThePatchResponseWithExpectedData()"
});
formatter.result({
  "status": "passed"
});
});