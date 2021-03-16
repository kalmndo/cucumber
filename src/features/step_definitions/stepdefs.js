const { Given, Then } = require("@cucumber/cucumber");
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

const { caNum, selectCaseButton } = require("../../util/element");

Given("I am on the pruhub login page", async function () {
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
