const { By } = require("selenium-webdriver");

const loadingWraper = By.xpath("//html/body/ion-app/ion-loading/ion-backdrop");

const caNumberField = By.xpath(
  "//input[contains(@ng-reflect-placeholder,'Type Claim Unique here')]"
);
const searchButton = By.xpath("//span[contains(.,'Start Searching')]");

const openMenu = By.xpath(
  "//ion-menu[@id='subMenu']//ion-icon[@name='md-add-circle']"
);
const transferButton = By.xpath("//input[contains(@class,'searchbar-input')]");
const searchUserField = By.xpath(
  `//ion-label[@class='label label-ios'][contains(.,'360718')]`
);
const claimManageTask = By.xpath(
  "//div[@class='input-wrapper'][contains(.,'Manage Task Claim')]"
);
const claimManageTaskUrl =
  "https://pruhub-stg.pru.intranet.asia/pruhub-2/#/manage-task-claim";

const caNum = "CLAIM_2021030221570034936";
const selectCaseButton = By.xpath("//input[contains(@id,'item_0')]");
const toastMessage = By.xpath("//div[@class='toast-message']");
const takeActionButton = By.xpath("//span[contains(.,'Take Action Case')]");
const toastCloseButton = By.xpath("//span[contains(.,'Close')]");
const loginInput = By.className("text-input text-input-ios");

module.exports = {
  loadingWraper,
  caNumberField,
  searchButton,
  openMenu,
  transferButton,
  searchUserField,
  claimManageTask,
  claimManageTaskUrl,
  caNum,
  selectCaseButton,
  toastMessage,
  takeActionButton,
  toastCloseButton,
  loginInput,
};
