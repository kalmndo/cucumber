const { By } = require("selenium-webdriver");

const loadingWraper = By.xpath("//div[@class='loading-content'][contains(.,'Please wait...')]");

const caNumberField = By.xpath(
  "//input[contains(@ng-reflect-placeholder,'Type Claim Unique here')]"
);
const searchButton = By.xpath("//span[contains(.,'Start Searching')]");

const openMenu = By.xpath(
  "//ion-menu[@id='subMenu']//ion-icon[@name='md-add-circle']"
);
const transferButton = By.xpath("//input[contains(@class,'searchbar-input')]");
const searchUserField = By.xpath(
" //input[contains(@class,'searchbar-input')]"
);
const claimManageTask = By.xpath(
  "//div[@class='input-wrapper'][contains(.,'Manage Task Claim')]"
);
const claimManageTaskUrl =
  "https://pruhub-stg.pru.intranet.asia/pruhub-2/#/manage-task-claim";

const caNum = "CLAIM_2021032511360025836";
const selectCaseButton = By.xpath("//input[contains(@id,'item_0')]");
const toastMessage = By.xpath("//div[@class='toast-message']");
const takeActionButton = By.xpath("//span[contains(.,'Take Action')]");
const toastCloseButton = By.xpath("//span[contains(.,'Close')]");
const loginInput = By.className("text-input text-input-ios");
const workBasketMenu = By.xpath("(//div[@class='input-wrapper'][contains(.,'Workbasket Claim')])[1]")
const workBasketUrl = "https://pruhub-stg.pru.intranet.asia/pruhub-2/#/claim"
const okErr = By.xpath("//span[@class='button-inner'][contains(.,'OK')]");
const avDecision1 = By.xpath("(//span[contains(@class,'button-inner')])[82]");
const elAvDecision = By.xpath("(//span[contains(@class,'button-inner')])[86]");
const avDecision2 = By.xpath("(//span[contains(@class,'button-inner')])[83]");
const btnAvDecision = By.xpath("//span[@class='button-inner'][contains(.,'Complete Task')]");
const msgOk = By.xpath("//span[@class='button-inner'][contains(.,'OK')]");

module.exports = {
  workBasketUrl,
  workBasketMenu,
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
  okErr,
  avDecision1,
  avDecision2,
  elAvDecision,
  btnAvDecision,
  msgOk,
};
