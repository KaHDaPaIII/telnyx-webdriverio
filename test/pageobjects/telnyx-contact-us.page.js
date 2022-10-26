const Page = require('./page.js');

class TelnyxContactUsPage extends Page {
    open () {
        return super.open('contact-us');
    }
    get talkToOurProductExpertsText() {
        return $('//main//div[2]//ul/li[1]/p[2]');
    }
    get callingFromOverseasLabel() {
        return $('section header');
    }
    get listOfCountriesAndPhoneNumbers() {
        return $$('section ul li');
    }
    async scrollCallingFromOverseasLabelIntoView() {
        await this.callingFromOverseasLabel.scrollIntoView();
    }
}

module.exports = new TelnyxContactUsPage()