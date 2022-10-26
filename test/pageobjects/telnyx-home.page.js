const Page = require('./page.js');

class TelnyxHomePage extends Page {
    open () {
        return super.open('');
    }
    get tryForFreeButton() {
        return $('main button[type="submit"]');
    }
    get startYourFreeTrialLink() {
        return $('main div:last-child a[href="/sign-up"]');
    }    
    async clickTryForFreeButton() {
        await this.tryForFreeButton.click();
    }    
    async clickStartYourFreeTrialLink(){
        await this.startYourFreeTrialLink.click();
    }
}

module.exports = new TelnyxHomePage()