const { driver } = require("./driver");
const { toastMessage, toastCloseButton } = require("../util/element");
const assert = require("assert");
const { until } = require("selenium-webdriver");

// ========================================= LOG =========================================

function logElement(element) {
  return element
    .getDriver()
    .executeScript("return arguments[0].outerHTML", element)
    .then((html) => console.log("nih ya", html));
}

// ========================================= SLEEP =========================================

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time || 1000);
  });
}

// ========================================= TOAST =========================================

const assertToastMsg = async (expectedMsg) => {
  let ele = await driver.wait(until.elementLocated(toastMessage), 60000);
  let msg = await ele.getText();
  console.log('"Toast message: "', msg);
  try {
    await sleep(200);
    await driver.findElement(toastCloseButton).click();
  } catch (error) {
    await driver.findElement(toastCloseButton).click();
    console.log("error assertToastMsg");
  }
  assert.strictEqual(
    msg,
    expectedMsg,
    "Fail to save or fail to submit decision"
  );
};

// ========================================= WAIT =========================================

const waitVisibility = async (by) => {
  try {
    let ele = await driver.wait(until.elementLocated(by), 30000);
    let foo = await ele.getText();
    console.log("waitVisibility ", foo);
  } catch (error) {
    console.log("waitVisibility error", error);
  }
};

const waitPageLoadUrl = async (url) => {
  try {
    let wait = await driver.wait(
      until.urlIs(url), //asdf
      30000,
      "Timed out after 30 seconds"
    );
    const el = await wait
    console.log("waitPageLoadUrl", el);
  } catch (error) {
    console.log("waitPageLoadUrl error", error);
  }
};

const waitInvisibility = async (by) => {
  try {
    let foo = await driver.wait(
      until.stalenessOf(await driver.findElement(by)),
      30000,
      "wait invisibility"
    );
    const el = await foo;
    console.log("waitInvisibility" , el);
  } catch (error) {
    console.log("error waitInvisibility", error);
  }
};

const waitClickable = async (by) => {
  try {
    let foo = await driver.wait(
      until.elementLocated(by),
      60000,
      "Timed out after 30 seconds",
    );
    const el = await foo.getText();
    console.log("waitClickable" , el);
  } catch (error) {
    console.log("error waitClickable", error);
  }

  // assert.strictEqual(await foo.getText(), "Hello from JavaScript!");
};

// ========================================= CLICK =========================================

const click = async (elementLocation) => {
  try {
    await waitClickable(elementLocation);
    await driver.findElement(elementLocation).click();
  } catch (error) {
    console.log("error click", error);
  }
};

const clickAndWaitPageLoad = async (elementLocation, url) => {
  let attempts = 0;
  while (attempts < 2) {
    try {
      await click(elementLocation);
      await waitPageLoadUrl(url);
      break;
    } catch (error) {
      console.log("err", error);
    }
  }
  const actualUrl = await driver.getCurrentUrl();
  const expectedUrl = url;
  assert.strictEqual(actualUrl, expectedUrl);
};

// ========================================= INPUT =========================================

const inputField = async (element, val) => {
  try {
    const findElm = await driver.findElement(element);
    
    let actualText = "";
    try {
      findElm.sendKeys(val);
      actualText = findElm.getAttribute("Value");
      if (actualText === val) {
      }
      if (!actualText === val) {
        console.log("err input field");
      }
    } catch (error) {
      await sleep(1000);
      console.log("Input character error, try to re-input");
      await driver
        .findElement(element)
        .sendKeys(Keys.chord(Keys.CONTROL, "a", Keys.DELETE));
    }
  } catch (error) {
    console.log("error BANGSAT!!", error);
  }
};

module.exports = {
  sleep,
  clickAndWaitPageLoad,
  waitInvisibility,
  assertToastMsg,
  inputField,
  waitVisibility,
  click,
};
