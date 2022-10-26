module.exports = class Page {
    open (path) {
        return browser.url(`https://telnyx.com/${path}`)
    }
    get closeCookiePopupButton() {
        return $('button[aria-label="close and deny"]');
    }
    get talkToAnExpertButton() {
        return $$('header a[href="/contact-us"]')[0];
    }
    get signUpButton() {
        return $$('header a[href="/sign-up"]')[0];
    }
    get logInButton() {
        return $('header a[href="https://portal.telnyx.com/"]:last-of-type');
    }
    get resourcesLabel() {
        return $('header ul > li:nth-of-type(4)');
    }
    get hamburgerButton() {
        return $('[role="button"]');
    } 
    get resourcesNavButton() {
        return $('//nav//div[count(div)=6]/div[4]/button');
    }
    get pricingNavButton() {
        return $('//nav//div[count(div)=6]/div[6]/button');
    }
    get developerDocsNavLink() {
        return $('//nav//div[count(div)=6]/div[1]/a');
    }
    get seeAllPricingNavLink() {
        return $('//nav//a[@href="/pricing"]');
    }
    get pricingLabel() {
        return $('header ul > li:nth-of-type(6)');
    }
    get developerDocsLink() {
        return $$('header ul > li:nth-of-type(4) a')[0];
    }
    get seeAllPricingLink() {
        return $('header ul > li:nth-of-type(6) a[href="/pricing"]');
    }
    get linkedInLink() {
        return $('[data-e2e="Footer--navItem-social"] ul > li:nth-child(1) > a');
    }
    get twitterLink() {
        return $('[data-e2e="Footer--navItem-social"] ul > li:nth-child(2) > a');
    }
    get facebookLink() {
        return $('[data-e2e="Footer--navItem-social"] ul > li:nth-child(3) > a');
    }
    get copyrightMessage() {
        return $('//footer//div[contains(text(),"©")]');
    }
    async clickCloseCookiePopupButton() {
        await this.closeCookiePopupButton.click();
    }
    async hoverResourcesLabel() {
        await this.resourcesLabel.moveTo();
    }
    async clickHamburgerButton() {
        await this.hamburgerButton.click();
    }
    async clickResourcesNavButton() {
        await this.resourcesNavButton.click();
    }
    async clickPricingNavButton() {
        await this.pricingNavButton.click();
    }
    async clickSeeAllPricingNavLink() {
        await this.seeAllPricingNavLink.click();
    }
    async clickDeveloperDocsNavLink() {
        await this.developerDocsNavLink.click();
    }
    async hoverPricingLabel() {
        await this.pricingLabel.moveTo();
    }
    async clickTalkToAnExpertButton() {
        await this.talkToAnExpertButton.click();
    }
    async clickLogInButton() {
        await this.logInButton.click();
    }
    async clickDeveloperDocsLink() {
        await this.developerDocsLink.click();
    }
    async clickSeeAllPricingLink() {
        await this.seeAllPricingLink.click();
    }
    async clickSignUpButton() {
        await this.signUpButton.click();
    }
}
