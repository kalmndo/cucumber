const { Builder, Capabilities } = require("selenium-webdriver");
const { setDefaultTimeout } = require("@cucumber/cucumber");
require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });
const driver = new Builder().withCapabilities(capabilities).build();

setDefaultTimeout(60 * 1000);

module.exports = {
  driver,
};
