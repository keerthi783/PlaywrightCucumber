const { chromium } = require('playwright');
const {expect} = require('@playwright/test');
const commonUtilis = require('../utils/commonUtilis');
const { test } = require('allure-playwright');
const commonUtilObj = new commonUtilis();

let browser
let page
let context

class PortalPage {
    constructor() {
        console.log("Portal page Constructor accessed");
    }

      async getPageTitle() {
        return await this.page.title();
      }

    async navigateToHomePage() {
        try {

             browser = await chromium.launch({ headless: false });
             context = await browser.newContext();
             page = await context.newPage();

            const url = await commonUtilObj.getUrl();
                await page.goto(url);
                await page.waitForLoadState('load'); 

                await page.waitForSelector('button#onetrust-accept-btn-handler', { timeout: 5000 });
                await page.click('button#onetrust-accept-btn-handler');
                var portpage = commonUtilObj.takeScreenshot('portalPage');
                this.attach(portpage,'image/png');
                
                console.log('Accepted cookies');
            } catch (error) {
                console.error('No cookie consent popup found or error:', error);
            }
    }
    async validatePageTitle()
    {
        console.log("validate");
        const actualTitle = await getPageTitle();
        expect(actualTitle).to.contain(expectedTitle);
    }
}

module.exports = new PortalPage(); 