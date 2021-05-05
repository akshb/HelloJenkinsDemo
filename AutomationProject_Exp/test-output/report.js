$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/guru99.feature");
formatter.feature({
  "name": "feature to test sign-in functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SignInFunctionality"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Check Sign-in is succesful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SignInCheck"
    }
  ]
});
formatter.step({
  "name": "user visits guru99 newtours page",
  "keyword": "Given "
});
formatter.step({
  "name": "enters \u003cusername\u003e and \u003cpassword\u003e to signin",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "user is succesfully signed in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc",
        "abc"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check Sign-in is succesful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SignInFunctionality"
    },
    {
      "name": "@SignInCheck"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user visits guru99 newtours page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.guru99StepDef.user_visits_guru99_newtours_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "enters abc and abc to signin",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.guru99StepDef.enters_abc_and_abc_to_signin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.guru99StepDef.clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is succesfully signed in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.guru99StepDef.user_is_succesfully_signed_in()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check Sign-in is succesful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SignInCheck2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user visits guru99 newtours page",
  "keyword": "Given "
});
formatter.step({
  "name": "enters \u003cusername\u003e and \u003cpassword\u003e to signin",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "user is succesfully signed in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc",
        "abc"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check Sign-in is succesful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SignInFunctionality"
    },
    {
      "name": "@SignInCheck2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user visits guru99 newtours page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.guru99StepDef.user_visits_guru99_newtours_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "enters abc and abc to signin",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.guru99StepDef.enters_abc_and_abc_to_signin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.guru99StepDef.clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is succesfully signed in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.guru99StepDef.user_is_succesfully_signed_in()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});