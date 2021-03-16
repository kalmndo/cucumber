const { By } = require("selenium-webdriver");
const { driver } = require("../util/driver");
const { loadingWraper, caNum } = require("../util/element");
const { waitInvisibility } = require("../util/helper");

const checkWorkbasket = async (cuNumber) => {
  await waitInvisibility(loadingWraper);
  let cuNumberElms = By.xpath(
    "//span[@class='last-decision'][contains(.,'Admission ID : " +
      paNumber +
      "')]"
  );
  await driver.manage().setTimeouts({ implicit: 60000 });
  const isCaseExists = (await driver.findElements(cuNumberElms).length) !== 0;
  await driver.manage().setTimeouts({ implicit: 10000 });
  // scroll to case
  const el = await driver.findElement(cuNumberElms);
  await el.getDriver().executeScript("arguments[0].scrollIntoView(true);", el);
};

const viewDetailCase = async () => {
  await checkWorkbasket(caNum);
  let cuNumberElms = By.xpath(
    "//span[@class='last-decision'][contains(.,'Admission ID : " +
      paNumber +
      "')]"
  );
  let attempts = 0;
  while (attempts < 2) {
    try {
      await driver.findElement(cuNumberElms).click();
      waitPageLoadUrl(url);
      break;
    } catch (error) {
      console.log(
        "case detail page is not showed, trying to click detail case again."
      );
    }
    attempts++;
  }
};

module.exports = {
  viewDetailCase,
};
