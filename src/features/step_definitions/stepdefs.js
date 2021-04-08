const { Given, Then } = require("@cucumber/cucumber");
const { goToManageTaskClaimMenu, goToWorkbasketMenu } = require("../../page/home");
const {
  loginPage,
  setUsernamAndPassword,
  clickLogin,
} = require("../../page/login");

const {
  searchCaseByClaimUnique,
  transferCaseToRightUser,
} = require("../../page/manageTask");
const { viewDetailCase } = require("../../page/workBasket");
const { click } = require("../../util/helper");
const { caNum, selectCaseButton } = require("../../util/element");
const { goToDecisionTab, selectDecision, submitDecision } = require("../../page/decision");

Given("I am on the pruhub login page",  async function () {
  await loginPage();
});

Then("I set username and password", async function () {
  await setUsernamAndPassword();
});

Then("I click Sign In button", async function () {
  await clickLogin();
});

Then("I go to Manage Task Claim menu", async function () {
  await goToManageTaskClaimMenu();
});

Then("I search case by claimunique", async function () {
  await searchCaseByClaimUnique(caNum);
});

Then("I select the result", async function () {
  await click(selectCaseButton);
});

Then("I transfer case to user", async function () {
  await transferCaseToRightUser();
});

Then("go to workbasket", async function () {
  await goToWorkbasketMenu();
});

Then("go to the case and view detail", async function () {
  await viewDetailCase();
});

Then("go to decision tab", async function () {
  await goToDecisionTab();
});

Then("I select the decision", async function () {
  await selectDecision();
});

Then("I click Complete Task button", async function () {
  await submitDecision();
});

Then("I go to Manage Task Claim Menu as Claim Analyst", async function () {
  await goToManageTaskClaimMenu();
});

Then("I search case by claimunique as Claim Analyst", async function () {
  await searchCaseByClaimUnique(caNum);
});

Then("I select the result as Claim Analyst", async function () {
  await click(selectCaseButton);
});

Then("I transfer case to user as Claim Analyst", async function () {
  await transferCaseToRightUser();
});