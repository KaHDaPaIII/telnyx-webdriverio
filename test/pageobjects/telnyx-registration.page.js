const Page = require('./page.js');

class TelnyxRegistrationPage extends Page {
    open () {
        return super.open('sign-up');
    }
    get createAccountButton() {
        return $('form[aria-label="signup-form"] button[type="submit"]');
    }
    get emailErrorMessage() {
        return $('#email_error');
    }
    get fullnameErrorMessage() {
        return $('#full_name_error');
    }
    get emailInput() {
        return $('#email');
    }
    get fullnameInput() {
        return $('#full_name');
    }
    get passwordInput() {
        return $('#password');
    }
    get termsCheckbox() {
        return $('[aria-labelledby="terms-label"]');
    }
    async setEmail(email) {
        await this.emailInput.setValue(email);
    }
    async setFullname(fullname) {
        await this.fullnameInput.setValue(fullname);
    }
    async setPassword(password) {
        await this.passwordInput.setValue(password);
    }
    async clickTermsCheckbox() {
        await this.termsCheckbox.click();
    }
    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }
}

module.exports = new TelnyxRegistrationPage()