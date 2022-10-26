class Helper {
    async typeLogin(page, user) {
        await page.setEmail(user.email);
        await page.setPassword(user.password);
    }
    async typeRegistration(page, user) {
        await page.setEmail(user.email);
        await page.setFullname(user.fullname);
        await page.setPassword(user.password);
    }
    async closeCookiePopup(page) {
        if(await page.closeCookiePopupButton.isExisting()){
            await page.clickCloseCookiePopupButton();
        }
    }
    async expectLoginFieldsAreHighlightedAndRequiredMessagesAreShown(page) {
        const emailInputBorder = await page.emailInput.getCSSProperty('border-color');
        await expect(emailInputBorder.value).toContain('255,102,102');
        const passwordInputBorder = await page.passwordInput.getCSSProperty('border-color');
        await expect(passwordInputBorder.value).toContain('255,102,102');
        await expect(page.emailErrorMessage).toBeDisplayed();
        await expect(page.emailErrorMessage).toHaveElementClassContaining('TextField__ErrorMessage');
        await expect(page.passwordErrorMessage).toBeDisplayed();
        await expect(page.passwordErrorMessage).toHaveElementClassContaining('TextField__ErrorMessage');
    }
    async ifNoCaptchaErrorThenAssertRegistration(email) {
        await browser.pause(10000); // Wait for page response
        const errorMessage = await $('#signup-form_error span');
        if(await errorMessage.isExisting()){
            await expect(errorMessage).toHaveTextContaining(/captcha/i);
        } else {
            const newRegistredEmailLabel = await $('svg[name="emailNew"] + h1 + div strong');
            await expect(newRegistredEmailLabel).toBeDisplayed();
            await expect(newRegistredEmailLabel).toHaveTextContaining(email);
        }
    }
}

module.exports = new Helper()