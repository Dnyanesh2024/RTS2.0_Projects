import { test, expect } from '@playwright/test';
import { TestConfig } from '../../test.config';
import { LoginPage } from '../../pages/LoginPage';
import { FHomePage } from '../../pages/Fungal_ExaminationPage/FHomePage';
import { FungalServicePage } from '../../pages/Fungal_ExaminationPage/FungalServicePage';
import { FungalAppInformationPage } from '../../pages/Fungal_ExaminationPage/FungalAppInformationPage';

test('Applicant Information', async ({ page }) => {
    test.setTimeout(60000);
    const testconfig = new TestConfig();
    const loginPage = new LoginPage(page);
    const fhomePage = new FHomePage(page);
    const fungalServicePage = new FungalServicePage(page);
    // create the income certificate page object after service page opens
    // call the login method to perform the login flow        
    await loginPage.login();
    // call the home page actions to navigate to the Income Certificate Service
    await fhomePage.ClickfHomePage();
    await fungalServicePage.FungalServicePage();

    // call the Fungal App Information page actions (handled after service page opens)

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

    //const fungalServicePage = new FungalServicePage(servicePage);
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

    
    //await fungalAppInformationPage.confirmFungalAppInformationLabel();

    //Create an instance of FungalAppInformationPage bound to the service page
    const fungalAppInformationPage = new FungalAppInformationPage(servicePage);

    
    //await fungalAppInformationPage.FungalAppInformationPage(testconfig, testconfig.pinCode);
    await fungalAppInformationPage.clickIAcceptButton();
    await page.waitForTimeout(1000);
    
    await fungalAppInformationPage.ApplicantInformationLabel();
    await page.waitForTimeout(1000);
    await fungalAppInformationPage.ClickOccupationDropdown();
    await page.waitForTimeout(1000);
    await fungalAppInformationPage.TypeOfIncomeCertificate();
    await page.waitForTimeout(1000);
    await fungalAppInformationPage.ClickDistrictDropdown();
    await page.waitForTimeout(1000);
    await fungalAppInformationPage.ClickTalukaDropdown();
    await page.waitForTimeout(1000);
    await fungalAppInformationPage.ClickVillageDropdown();
    await page.waitForTimeout(1000);
    await fungalAppInformationPage.EnterPincode();
    await page.waitForTimeout(1000);
    await fungalAppInformationPage.ClickOnSavebutton();
    //await applicantInformationPage.ClickOnSavebutton();
   
    await page.waitForTimeout(3000);

})

