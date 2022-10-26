const Page = require('./page.js');

class TelnyxSavingsCalculatorPage extends Page {
    open () {
        return super.open('twilio-pricing-calculator');
    }
    get messagingApiButton() {
        return $$('//input[@type="checkbox"]/..')[0];
    }
    get continueButton() {
        return $('header + div + div button');
    }
    get localNumbersMinusButton() { 
        return $('//input[@id="local-numbers"]/../button[1]');
        // need to enable :has() selector in firefox
        // return $('button:has(+ #local-numbers)');
    }
    get localNumbersInput() {
        return $('#local-numbers');
    }
    get localNumbersInputError() {
        return $('//label[@for="local-numbers"]/../../div[2]');
        // need to enable :has() selector in firefox
        // return $('div:has(> label[for="local-numbers"]) + div');
    }
    get tollFreeNumbersMinusButton() {
        return $('//input[@id="toll-free-numbers"]/../button[1]');
        // need to enable :has() selector in firefox
        // return $('button:has(+ #toll-free-numbers)');
    }
    get tollFreeNumbersInput() {
        return $('#toll-free-numbers');
    }
    get tollFreeNumbersInputError() {
        return $('//label[@for="toll-free-numbers"]/../../div[2]');
        // need to enable :has() selector in firefox
        // return $('div:has(> label[for="toll-free-numbers"]) + div');
    }
    get yourSavings$Label() {
        return $('header + div h2 + p > span:first-child');
    }
    async clickMessagingApiButton() {
        await this.messagingApiButton.click();
    }
    async clickContinueButton() {
        await this.continueButton.click();
    }
    async clickLocalNumbersMinusButton() {
        await this.localNumbersMinusButton.click();
    }
    async setLocalNumbers(value) {
        await this.localNumbersInput.setValue(value);
    }
    async clickTollFreeNumbersMinusButton() {
        await this.tollFreeNumbersMinusButton.click();
    }
    async setTollFreeNumbers(value) {
        await this.tollFreeNumbersInput.setValue(value);
    }
}

module.exports = new TelnyxSavingsCalculatorPage()