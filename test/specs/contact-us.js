const contactUsPage = require('../pageobjects/telnyx-contact-us.page.js');
const countriesAndPhonenumbers = require('../fixture/countries-and-phonenumbers.json');
const helper = require('../support/helper.js');

describe('Testing the “Talk to an expert” page', () => {
    
    beforeEach(async () => {
        await contactUsPage.open();
        await helper.closeCookiePopup(contactUsPage);
    })
    
    it('Checking the phone number in the “Talk to our product experts” section', async () => {
        await expect(contactUsPage.talkToOurProductExpertsText).toBeDisplayed();
        await expect(contactUsPage.talkToOurProductExpertsText).toHaveTextContaining("(888) 980 9750");
    })

    it('Checking the phone numbers in the “Calling from overseas?” section', async () => {
        await contactUsPage.scrollCallingFromOverseasLabelIntoView();
        const listOfPhonenumbers = await contactUsPage.listOfCountriesAndPhoneNumbers;
        for(let i = 0; i < listOfPhonenumbers.length; i++){
            await expect(listOfPhonenumbers[i]).toHaveTextContaining(countriesAndPhonenumbers[i].country);
            await expect(listOfPhonenumbers[i]).toHaveTextContaining(countriesAndPhonenumbers[i].phonenumber);
        }
    })

});
