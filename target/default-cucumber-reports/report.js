$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/end2end.feature");
formatter.feature({
  "name": "Add to Cart process",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@end2end"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add to Cart Success",
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
  "name": "user searches for \"toys\" from searchbox",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects any of the products",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies the product is added to cart",
  "keyword": "And "
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
  "name": "Add to Cart Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@end2end"
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
  "name": "user searches for \"toys\" from searchbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userSearchesForFromSearchbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects any of the products",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userSelectsAnyOfTheProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userClicksOnAddToCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the product is added to cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userVerifiesTheProductIsAddedToCart()"
});
formatter.result({
  "status": "passed"
});
});