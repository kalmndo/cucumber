const { driver } = require("../util/driver");
const {
  openMenu,
  loadingWraper,
  claimManageTask,
  claimManageTaskUrl,
} = require("../util/element");
const { clickAndWaitPageLoad, waitInvisibility } = require("../util/helper");

const clickMenu = async (menuElm, url) => {
  try {
    const isMenuClosed = (await driver.findElements(openMenu).length) !== 0;
    await driver.manage().setTimeouts({ implicit: 10000 });
    if (isMenuClosed) {
      await driver.findElement(openMenu).click();
    }
    await clickAndWaitPageLoad(menuElm, url);
    await waitInvisibility(loadingWraper);
  } catch (error) {
    console.log("click menu", error);
  }
};

const goToManageTaskClaimMenu = async () => {
  await clickMenu(claimManageTask, claimManageTaskUrl);
};

const goToWorkbasketMenu = async () => {
  clickMenu(WorkbasketMenu, workbasketUrl);
};

module.exports = {
  goToWorkbasketMenu,
  goToManageTaskClaimMenu,
};
