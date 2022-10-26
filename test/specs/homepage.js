const homePage = require('../pageobjects/telnyx-home.page.js');
const helper = require('../support/helper.js');

describe('Testing the main page', () => {
    
    beforeEach(async () => {
        await homePage.open();
        await helper.closeCookiePopup(homePage);
    })
    
    it('Clicking the "Try for free" button redirects to the sign up page', async () => {
        await homePage.clickTryForFreeButton();
        await expect(browser).toHaveUrlContaining('https://telnyx.com/sign-up');
    });

    it('Clicking the “Start your free trial” button on the bottom of the homepage redirects to the sign up page', async () => {
        await homePage.clickStartYourFreeTrialLink();
        await expect(browser).toHaveUrlContaining('https://telnyx.com/sign-up');
    });

    it('Clicking the “Developer Docs” link in the hoverable dropdown menu', async () => {
        await browser.setWindowSize(1600, 900);
        await homePage.hoverResourcesLabel();
        await homePage.clickDeveloperDocsLink();
        const telnyxApiDocLabel = await $('#telnyx-api-v2-documentation');
        await expect(telnyxApiDocLabel).toBeDisplayedInViewport();
    });

    it('Clicking the “See all Pricing” link in the hoverable dropdown menu', async () => {
        await browser.setWindowSize(1600, 900);
        await homePage.hoverPricingLabel();
        await homePage.clickSeeAllPricingLink();
        await expect(browser).toHaveUrl('https://telnyx.com/pricing');
    });

    it('The “Connect on LinkedIn” link in the footer', async () => {
        await expect(homePage.linkedInLink).toBeDisplayed();
        await expect(homePage.linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/company/telnyx/');
    });

    it('The “Follow on Twitter” link in the footer', async () => {
        await expect(homePage.twitterLink).toBeDisplayed();
        await expect(homePage.twitterLink).toHaveAttribute('href', 'https://twitter.com/telnyx');
    });

    it('The “Follow on Facebook” link in the footer', async () => {
        await expect(homePage.facebookLink).toBeDisplayed();
        await expect(homePage.facebookLink).toHaveAttribute('href', 'https://www.facebook.com/Telnyx/');
    });

    it('Clicking the “Developer Docs” link in the “hamburger menu”', async () => {
        await browser.setWindowSize(540, 960);
        await homePage.clickHamburgerButton();
        await homePage.clickResourcesNavButton();
        await homePage.clickDeveloperDocsNavLink();
        const telnyxApiDocLabel = await $('#telnyx-api-v2-documentation');
        await expect(telnyxApiDocLabel).toBeDisplayedInViewport();
    });

    it.only('Clicking the “See all Pricing” link in the “hamburger menu”', async () => {
        await browser.setWindowSize(540, 960);
        await homePage.clickHamburgerButton();
        await homePage.clickPricingNavButton();
        await homePage.clickSeeAllPricingNavLink();
        await expect(browser).toHaveUrl('https://telnyx.com/pricing');
    });

    it('Checking the year in the copyright message in the footer', async () => {
        await expect(homePage.copyrightMessage).toBeDisplayed();
        await expect(homePage.copyrightMessage).toHaveTextContaining(new Date().getFullYear());
    });
});
