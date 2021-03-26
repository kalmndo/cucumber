const { By, Key } = require("selenium-webdriver");
const { driver } = require("../util/driver");
const { loadingWraper, caNum } = require("../util/element");
const {
  waitInvisibility,
  sleep,
  clickAndWaitPageLoad,
  waitVisibility,
  click,
} = require("../util/helper");

const goToBank = async () => {
  const baEl = By.xpath("(//a[contains(@ng-reflect-ng-class,'[object Object]')])[7]")
  await waitVisibility(baEl)
  const asdf = await driver.findElement(baEl)
  
  await driver.executeScript("arguments[0].click();", asdf)
  await waitInvisibility(loadingWraper);
}


const cuNumEl = By.xpath(
  "//input[contains(@placeholder,'Search by Claim Unique')]"
);
const linkEl = By.xpath("//ion-icon[contains(@name,'ios-arrow-forward')]");

const viewDetailCase = async () => {
  try {
    await waitInvisibility(loadingWraper);
    await waitVisibility(cuNumEl);
    await sleep(10000);
    const searchCuNum = await driver.findElement(cuNumEl);
    searchCuNum.sendKeys(caNum, Key.TAB, Key.TAB, Key.ENTER);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await waitInvisibility(loadingWraper);

    await clickAndWaitPageLoad(
      linkEl,
      "https://pruhub-stg.pru.intranet.asia/pruhub-2/#/claim-review"
    );
    await waitInvisibility(loadingWraper)
    console.log('inivis 1')
    await waitInvisibility(loadingWraper)
    console.log('inivis 2')
    await waitInvisibility(loadingWraper)
    console.log('inivis 3')
    await goToBank()
  } catch (error) {
    console.log("error => workbasket", error);
  }
};

module.exports = {
  viewDetailCase,
};
