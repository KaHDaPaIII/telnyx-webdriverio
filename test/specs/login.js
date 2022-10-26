const loginPage = require('../pageobjects/telnyx-login.page.js');
const helper = require('../support/helper.js');
const UserCredentials = require('../support/generate-credentials.js');
const mockupData = require('../fixture/mockup-data.json');

describe('Testing the sign in page', () => {
    
    beforeEach(async () => {
        await loginPage.open();
    })
    
    it('Checking the login with empty fields', async () => {
        await loginPage.clickLoginButton();
        await helper.expectLoginFieldsAreHighlightedAndRequiredMessagesAreShown(loginPage);
    })

    it('Checking the login with a randomly generated email and password', async () => {
        const testuser = new UserCredentials(mockupData);
        await helper.typeLogin(loginPage, testuser);
        await loginPage.clickLoginButton();
        await expect(loginPage.signinMessage).toBeDisplayed();
    })

});
