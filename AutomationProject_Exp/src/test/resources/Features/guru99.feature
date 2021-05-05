@SignInFunctionality
Feature: feature to test sign-in functionality

@SignInCheck
Scenario Outline: Check Sign-in is succesful with valid credentials
Given user visits guru99 newtours page
When enters <username> and <password> to signin
And clicks on submit button
Then user is succesfully signed in

  Examples: 
      |username | password |
      |abc      |abc |
      

@SignInCheck2 @Smoke
Scenario Outline: Check Sign-in is succesful with valid credentials
Given user visits guru99 newtours page
When enters <username> and <password> to signin
And clicks on submit button
Then user is succesfully signed in

  Examples: 
      |username | password |
      |abc      |abc |