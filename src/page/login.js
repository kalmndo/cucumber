const { driver } = require("../util/driver");
const { loginInput } = require("../util/element");

const username = "360718";
const password = "P@Pru_36";

const loginPage = async () => {
  await driver.get("https://pruhub-stg.pru.intranet.asia/pruhub-2/#/login");
};

const setUsernamAndPassword = async () => {
  await driver.findElement(loginInput).sendKeys(username, Key.TAB, password);
};

const clickLogin = async () => {
  await driver.findElement(By.className("submit-btn")).click();
};

module.exports = {
  loginPage,
  setUsernamAndPassword,
  clickLogin,
};
