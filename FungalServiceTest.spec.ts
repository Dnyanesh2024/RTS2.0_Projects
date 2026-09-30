import { test, expect } from '@playwright/test';
import { TestConfig } from '../../test.config';
import { LoginPage } from '../../pages/LoginPage';
import { FHomePage } from '../../pages/Fungal_ExaminationPage/FHomePage';
import { FungalServicePage } from '../../pages/Fungal_ExaminationPage/FungalServicePage';

test('Click on Fungal Service Link', async ({ page }) => {

    test.setTimeout(60000);

    const testconfig = new TestConfig();
    const loginPage = new LoginPage(page);
    const fhomePage = new FHomePage(page);
    //const fungalServicePage = new FungalServicePage(page);

    // call the login method to perform the login flow
    await loginPage.login();
    await page.waitForTimeout(3000);
    // Calling home page actions (perform flow up to the final click)
    await fhomePage.ClickfHomePage();
    await page.waitForTimeout(3000); 
  

    // Click the fungal examination link. If it opens a new tab, pick that tab; otherwise use the same page.
    const initialPageCount = page.context().pages().length;
    await fhomePage.clickOnfungalExamination();
    // give the browser a short moment for a new page to open
    await page.waitForTimeout(1000);

    let servicePage = page;
    const pages = page.context().pages();
    if (pages.length > initialPageCount) {
        servicePage = pages[pages.length - 1];
    }

    await servicePage.waitForLoadState('domcontentloaded');

    const fungalServicePage = new FungalServicePage(servicePage);
    //await fungalServicePage.confirmFungalServiceLabel();

    // The button may open a new tab or navigate the current page.
    const popupPromise = servicePage.context()
        .waitForEvent('page', { timeout: 10000 })
        .catch(() => null);
    const navigationPromise = servicePage
        .waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
        .then(() => servicePage)
        .catch(() => null);

    await fungalServicePage.clickOnContinueToApplicationForm();

    const destinationPage = await Promise.race([popupPromise, navigationPromise]);
    const applicationPage = destinationPage ?? servicePage;

    await applicationPage.waitForLoadState('domcontentloaded');
    //await expect(applicationPage).toHaveURL(/dhdept-portal-ui-uat\.mahaitgov\.in\/service-configuration\/10131/);

    await page.waitForTimeout(3000);
        
})

