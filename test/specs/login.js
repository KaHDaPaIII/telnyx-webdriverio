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
        const emailInputBorder = await loginPage.emailInput.getCSSProperty('border-color');
        await expect(emailInputBorder.value).toContain('255,102,102');
        const passwordInputBorder = await loginPage.passwordInput.getCSSProperty('border-color');
        await expect(passwordInputBorder.value).toContain('255,102,102');
        await expect(loginPage.emailErrorMessage).toBeDisplayed();
        await expect(loginPage.emailErrorMessage).toHaveElementClassContaining('TextField__ErrorMessage');
        await expect(loginPage.passwordErrorMessage).toBeDisplayed();
        await expect(loginPage.passwordErrorMessage).toHaveElementClassContaining('TextField__ErrorMessage');
    })

    it('Checking the login with a randomly generated email and password', async () => {
        const testuser = new UserCredentials(mockupData);
        await helper.typeLogin(loginPage, testuser);
        await loginPage.clickLoginButton();
        const signinMessage = await $('[data-testid="login.signin.message"]');
        await expect(signinMessage).toBeDisplayed();
    })

});
