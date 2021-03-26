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
    Then go to the case and view detail
    Then go to decision tab
    Then I select the decision
    Then I click Complete Task button
    Then I go to Manage Task Claim Menu as Claim Analyst
    Then I search case by claimunique as Claim Analyst
    Then I select the result as Claim Analyst
    Then I transfer case to user as Claim Analyst