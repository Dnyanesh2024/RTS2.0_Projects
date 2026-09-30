import { test, expect,} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/homePage';
import { IncomeCertificatePage } from '../pages/IncomeCertificatePage';
import { ApplicantInformationPage } from '../pages/ApplicantInformationPage';

test('Applicant Information', async ({ page }) => {
    test.setTimeout(60000);
    const testconfig = new TestConfig();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);    
    // create the income certificate page object after service page opens

    // call the login method to perform the login flow
        
    await loginPage.login();


   

    // call the home page actions to navigate to the Income Certificate Service
    await homePage.ClickHomePage();

   

    // call the income Certificate page actions (handled after service page opens)


    const [servicePage] = await Promise.all([
        page.context().waitForEvent('page'),
        homePage.clickOnIncomeCertificate()
    ]);
    await servicePage.waitForLoadState('domcontentloaded');

    //Create an instance of IncomeCertificatePage bound to the service page
    const incomeCertificatePage = new IncomeCertificatePage(servicePage);

    

    //await incomeCertificatePage.confirmIncomeCertificateLabel();



    const applicationPagePromise = Promise.race([
        servicePage.context().waitForEvent('page'),
        servicePage.waitForNavigation({ waitUntil: 'domcontentloaded' }).then(() => servicePage)
    ]);
    await incomeCertificatePage.clickOnContinueToApplicationForm();
    const applicationPage = await applicationPagePromise;

    await applicationPage.waitForLoadState('domcontentloaded');
    await expect(applicationPage).toHaveURL(/revdept-portal-ui-uat.mahaitgov.in\/income-certificate\/income-service-v1/);

    await page.waitForTimeout(3000);
    // The header is on the application page — create page object for it
    const incomeCertificateAppPage = new IncomeCertificatePage(applicationPage);
    await incomeCertificateAppPage.ConfirmIncomeCertificateHeader();

    // Create an instance of ApplicantInformationPage
    const applicantInformationPage = new ApplicantInformationPage(applicationPage);
    await page.waitForTimeout(3000);

    
    //await applicantInformationPage.ApplicantInformationPage(testconfig, testconfig.pinCode);

    await applicantInformationPage.ApplicantInformationLabel();
    await page.waitForTimeout(1000);
    await applicantInformationPage.ClickOccupationDropdown();
        await page.waitForTimeout(1000);
    await applicantInformationPage.TypeOfIncomeCertificate();
        await page.waitForTimeout(1000);
    await applicantInformationPage.ClickDistrictDropdown();
        await page.waitForTimeout(1000);
    await applicantInformationPage.ClickTalukaDropdown();
        await page.waitForTimeout(1000);
    await applicantInformationPage.ClickVillageDropdown();
        await page.waitForTimeout(1000);
    await applicantInformationPage.EnterPincode();
    await page.waitForTimeout(1000);
    await applicantInformationPage.ClickOnSavebutton();
    await applicantInformationPage.ClickOnSavebutton();
    //await applicantInformationPage.ClickOnSavebutton();

    await page.waitForTimeout(3000);

    


    
})

