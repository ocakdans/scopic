$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/loginwrongemail.feature");
formatter.feature({
  "name": "Amazon Fail Login Wrong Email",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wrongEmail"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Fail Login via Email Wrong Email",
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
  "name": "user gets email error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "e-mail"
      ]
    },
    {
      "cells": [
        "selim.ocakdan333@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Fail Login via Email Wrong Email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wrongEmail"
    }
  ]
});
formatter.step({
  "name": "user is on the amazon homepage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.user_is_on_the_amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hover over account\u0026lists",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userHoverOverAccountLists()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userClicksOnSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"selim.ocakdan333@gmail.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersValidAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userClicksOnContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets email error",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userGetsEmailError()"
});
formatter.result({
  "status": "passed"
});
});