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