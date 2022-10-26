class TelnyxLoginPage {
    open () {
        return browser.url('https://portal.telnyx.com/');
    }
    get loginButton() {
        return $('form[aria-label="loginForm"] button[type="submit"]');
    }
    get emailInput() {
        return $('form[aria-label="loginForm"] input[name="email"]');
    }
    get emailErrorMessage() {
        return $('//input[@name="email"]/../../div[contains(@class,"TextField__ErrorMessage")]');
        // need to enable :has() selector in firefox
        // return $('form[aria-label="loginForm"] div:has(> input[name="email"]) + div');
    }
    get passwordInput() {
        return $('form[aria-label="loginForm"] input[name="password"]');
    }
    get passwordErrorMessage() {
        return $('//input[@name="password"]/../../div[contains(@class,"TextField__ErrorMessage")]');
        // need to enable :has() selector in firefox
        // return $('form[aria-label="loginForm"] div:has(> input[name="password"]) + div');
    }
    async setEmail(email) {
        await this.emailInput.setValue(email);
    }
    async setPassword(password) {
        await this.passwordInput.setValue(password);
    }
    async clickLoginButton() {
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }
}

module.exports = new TelnyxLoginPage()