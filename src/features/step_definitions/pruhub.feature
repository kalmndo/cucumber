Feature: Pruhub Decision
  Making a decision

  Scenario: Login
    Given I am on the pruhub login page
    Then I set username and password
    Then I click Sign In button
    Then I go to Manage Task Claim menu
    Then I search case by claimunique
    Then I select the result
    Then I transfer case to user
    Then go to workbasket
