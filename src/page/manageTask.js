const {
  loadingWraper,
  caNumberField,
  searchButton,
  transferButton,
  searchUserField,
  toastMessage,
  takeActionButton,
} = require("../util/element");

const {
  sleep,
  waitInvisibility,
  inputField,
  waitVisibility,
  assertToastMsg,
  click,
} = require("../util/helper");

const { driver } = require("../util/driver");

const searchCaseByClaimUnique = async (claimUniqueNumber) => {
  try {
    await inputField(caNumberField, claimUniqueNumber);
    await sleep(1000);
    await click(searchButton);
    await waitInvisibility(loadingWraper);
  } catch (error) {
    console.log("eeeer", error);
  }
};

const clickAndWaitToast = async (ele) => {
  let attempts = 0;
  while (attempts < 2) {
    try {
      await click(ele);
      await waitVisibility(toastMessage);
      break;
    } catch (error) {
      await sleep(1000);
      console.log("toast message not showed, try to click button again");
    }
    attempts++;
  }
};

const checkToastMsgAfterTransferCase = async () => {
  const msg = await driver.findElement(toastMessage).getText();
  const expectedToastMsg = "Saved Success";
  const expectedToastMsg2 =
    "ERROR: Task already claim, please clear session or transfer another task.";

  if (msg !== expectedToastMsg) {
    await assertToastMsg(expectedToastMsg2);
  } else {
    await assertToastMsg(expectedToastMsg);
  }
};

const transferCaseToRightUser = async () => {
  await click(transferButton);
  const searchUser = await driver.findElement(searchUserField);
  let attempts = 0;
  while (attempts < 2) {
    try {
      await sleep(200);
      await searchUser.sendKeys("360718");
      await click("click label dam");
    } catch (error) {
      console.log("error => transferCaseToRightUser");
    }
  }
  await clickAndWaitToast(takeActionButton);
  await checkToastMsgAfterTransferCase();
  await sleep(1000);
};

module.exports = {
  searchCaseByClaimUnique,
  transferCaseToRightUser,
};
