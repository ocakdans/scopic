$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/loginsuccess.feature");
formatter.feature({
  "name": "Amazon Success Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@successLogin"
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
  "name": "user enters \"\u003cpassword\u003e\"",
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
formatter.step({
  "name": "user closes the driver",
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
    },
    {
      "cells": [
        "ocakdan.selim52@gmail.com",
        "521453"
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
      "name": "@successLogin"
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
  "name": "user enters valid \"selim.ocakdan@gmail.com\" address",
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
  "name": "user enters \"Aso350000n\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEnters(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on second Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userClicksOnSecondSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies name",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userVerifiesName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the driver",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.userClosesTheDriver()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Success Login via Email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@successLogin"
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
  "name": "user enters valid \"ocakdan.selim52@gmail.com\" address",
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
  "name": "user enters \"521453\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEnters(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on second Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userClicksOnSecondSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies name",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userVerifiesName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the driver",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WSStepDefinitions.userClosesTheDriver()"
});
formatter.result({
  "status": "passed"
});
});