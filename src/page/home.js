const { driver } = require("../util/driver");
const {
  openMenu,
  loadingWraper,
  claimManageTask,
  claimManageTaskUrl,
  workBasketMenu,
  workBasketUrl
} = require("../util/element");
const { clickAndWaitPageLoad, waitInvisibility, waitVisibility } = require("../util/helper");

const clickMenu = async (menuElm, url) => {
  try {
    console.log("wannting to click menu")
    const isMenuClosed =  (await driver.findElements(openMenu)).length === 0;
    console.log("isMenuClosed",  (await driver.findElements(openMenu)).length)
    await driver.manage().setTimeouts({ implicit: 10000 });
    console.log('then wait')
    if (isMenuClosed) {
      console.log('clicked menu')
      await driver.findElement(openMenu).click();
    }
    await clickAndWaitPageLoad(menuElm, url);
    console.log('wait invisi')
    await waitInvisibility(loadingWraper);
  } catch (error) {
    console.log("click menu", error);
  }
};

const goToManageTaskClaimMenu = async () => {
  await clickMenu(claimManageTask, claimManageTaskUrl);
};

const goToWorkbasketMenu = async () => {
  clickMenu(workBasketMenu, workBasketUrl);
};

const goToManageTaskClaimMenuCA = async () => {
  await waitVisibility();
  await clickMenu(claimManageTask, claimManageTaskUrl);
};

module.exports = {
  goToWorkbasketMenu,
  goToManageTaskClaimMenu,
  goToManageTaskClaimMenuCA,
};
