$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazonlogin.feature");
formatter.feature({
  "name": "Amazon Success Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@amazonLogin"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Success Login via Email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the amazon homepage",
  "keyword": "When "
});
formatter.step({
  "name": "user hover over account\u0026lists",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters valid \"\u003ce-mail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on second Sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies name",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "e-mail",
        "password"
      ]
    },
    {
      "cells": [
        "selim.ocakdan@gmail.com",
        "Aso350000n"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Success Login via Email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazonLogin"
    }
  ]
});
formatter.step({
  "name": "user is on the amazon homepage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.StepDefinitions.user_is_on_the_amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hover over account\u0026lists",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinitions.userHoverOverAccountLists()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinitions.userClicksOnSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"selim.ocakdan@gmail.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinitions.userEntersValidAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinitions.userClicksOnContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"Aso350000n\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinitions.userEntersValid(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on second Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinitions.userClicksOnSecondSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies name",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.StepDefinitions.userVerifiesName()"
});
formatter.result({
  "status": "passed"
});
});