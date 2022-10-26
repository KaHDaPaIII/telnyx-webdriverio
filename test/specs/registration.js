const registrationPage = require('../pageobjects/telnyx-registration.page.js');
const helper = require('../support/helper.js');
const UserCredentials = require('../support/generate-credentials.js');
const mockupData = require('../fixture/mockup-data.json');

describe('Testing the registration page', () => {
    
    beforeEach(async () => {
        await registrationPage.open();
        await helper.closeCookiePopup(registrationPage);
    })
    
    it('Checking the registration with blank inputs', async () => {
        await registrationPage.clickCreateAccountButton();
        await expect(registrationPage.emailErrorMessage).toBeDisplayed();
        await expect(registrationPage.fullnameErrorMessage).toBeDisplayed();
    })

    it('Checking the registration with valid random generated inputs', async () => {
        const testuser = new UserCredentials(mockupData);
        await helper.typeRegistration(registrationPage, testuser);
        await registrationPage.clickTermsCheckbox();
        await registrationPage.clickCreateAccountButton();
        await helper.ifNoCaptchaErrorThenAssertRegistration(testuser.email);
    })

});
