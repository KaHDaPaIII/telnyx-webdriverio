const homePage = require('../pageobjects/telnyx-home.page.js');
const savingsCalculatorPage = require('../pageobjects/telnyx-twilio-pricing-calculator.page.js');

describe('Checking the “Savings Calculator” function', () => {
    
    beforeEach(async () => {
        await savingsCalculatorPage.open();
        if(await homePage.closeCookiePopupButton.isExisting()){
            await homePage.clickCloseCookiePopupButton();
        }
    })
    
    it('Checking the number in the “Your savings” section after typing the “100000” number in the “Local Numbers” input and in the “Toll-free Numbers” input', async () => {
        await savingsCalculatorPage.clickMessagingApiButton();
        await savingsCalculatorPage.clickContinueButton();
        await savingsCalculatorPage.setLocalNumbers(100000);
        await savingsCalculatorPage.setTollFreeNumbers(100000);
        await savingsCalculatorPage.clickContinueButton();
        await expect(savingsCalculatorPage.yourSavings$Label).toHaveTextContaining("1,798,218");
    })

    it('Checking the number in the “Your savings” section after typing the “0” number in the “Local Numbers” input and in the “Toll-free Numbers” input', async () => {
        await savingsCalculatorPage.clickMessagingApiButton();
        await savingsCalculatorPage.clickContinueButton();
        await savingsCalculatorPage.setLocalNumbers(0);
        await savingsCalculatorPage.setTollFreeNumbers(0);
        await savingsCalculatorPage.clickContinueButton();
        await expect(savingsCalculatorPage.yourSavings$Label).toHaveTextContaining("7,650");
    })

    it('Checking the error below the “Local Numbers” and the “Toll-free Numbers” inputs after typing the “100001” number', async () => {
        await savingsCalculatorPage.clickMessagingApiButton();
        await savingsCalculatorPage.clickContinueButton();
        await savingsCalculatorPage.setLocalNumbers(100001);
        await savingsCalculatorPage.setTollFreeNumbers(100001);
        await expect(savingsCalculatorPage.localNumbersInputError).toBeDisplayed();
        await expect(savingsCalculatorPage.tollFreeNumbersInputError).toBeDisplayed();
        await expect(savingsCalculatorPage.continueButton).toBeDisabled();
    })

    it('Checking the error below the “Local Numbers” and the “Toll-free Numbers” inputs after typing the “1” number and clicking the minus button', async () => {
        await savingsCalculatorPage.clickMessagingApiButton();
        await savingsCalculatorPage.clickContinueButton();
        await savingsCalculatorPage.setLocalNumbers(1);
        await savingsCalculatorPage.setTollFreeNumbers(1);
        await savingsCalculatorPage.clickLocalNumbersMinusButton();
        await savingsCalculatorPage.clickTollFreeNumbersMinusButton();
        await expect(savingsCalculatorPage.localNumbersInputError).toBeDisplayed();
        await expect(savingsCalculatorPage.tollFreeNumbersInputError).toBeDisplayed();
        await expect(savingsCalculatorPage.continueButton).toBeDisabled();
    })

});
