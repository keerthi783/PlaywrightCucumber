const { Given, Then } = require('@cucumber/cucumber');
const portalPageObj = require('../pages/DeveloperPortalPage.spec'); 

Given('Launch developer portal', async function () {
    console.log("Launch developer portal");
    await portalPageObj.navigateToHomePage();
});

Then('Validate it launched successfully', async function () {
  console.log("Validate");
  await portalPageObj.validatePageTitle();
});