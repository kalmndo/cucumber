const { By } = require("selenium-webdriver");
const { okErr, loadingWraper, avDecision1, elAvDecision, avDecision2, btnAvDecision, msgOk } = require("../util/element");
const { clickAndWaitPageLoad, click, waitInvisibility, waitVisibility } = require("../util/helper");

const decisionTabEl = By.xpath("(//div[@class='input-wrapper'][contains(.,'Decision Claim')])[1]")

const goToDecisionTab = async () => {
    await clickAndWaitPageLoad(decisionTabEl, "https://pruhub-stg.pru.intranet.asia/pruhub-2/#/claim-review");
    await waitInvisibility(loadingWraper);
    await click(okErr);
}

const selectDecision = async () => {
    await click(avDecision1);
    await click(elAvDecision);
    await click(avDecision2);
    await click(elAvDecision);
}

const submitDecision = async () => {
    await click(btnAvDecision);
    await click(msgOk);
    await waitVisibility(loadingWraper);
}

module.exports = {
    goToDecisionTab,
    selectDecision,
    submitDecision,
}