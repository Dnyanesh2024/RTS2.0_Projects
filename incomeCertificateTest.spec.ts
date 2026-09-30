import { test, expect, Config } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/homePage';
import { IncomeCertificatePage } from '../pages/IncomeCertificatePage';

test('Click on Revenue Service Link', async ({ page }) => {

    test.setTimeout(60000);

    const testconfig = new TestConfig();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);    
    //const incomeCertificatePage= IncomeCertificatePage;

    // call the login method to perform the login flow
    await loginPage.login();
    await page.waitForTimeout(3000);

    // Login page actions
    /*
    await loginPage.clickPraveshButton();
    await loginPage.setUsername(testconfig.username);
    await loginPage.setPassword(testconfig.password);
    await loginPage.setCaptchaCode('');
    await page.waitForTimeout(10000);
    await loginPage.clickLoginButton();
    await page.waitForTimeout(10000);
    */

    // Calling home page actions
    await homePage.ClickHomePage();

    const [servicePage] = await Promise.all([
        page.context().waitForEvent('page'),
        homePage.clickOnIncomeCertificate()
    ]);
    await servicePage.waitForLoadState('domcontentloaded');

    const incomeCertificatePage = new IncomeCertificatePage(servicePage);
    await incomeCertificatePage.confirmIncomeCertificateLabel();

    const applicationPagePromise = Promise.race([
        servicePage.context().waitForEvent('page'),
        servicePage.waitForNavigation({ waitUntil: 'domcontentloaded' }).then(() => servicePage)
    ]);
    await incomeCertificatePage.clickOnContinueToApplicationForm();
    const applicationPage = await applicationPagePromise;

    await applicationPage.waitForLoadState('domcontentloaded');
    await expect(applicationPage).toHaveURL(/revdept-portal-ui-uat.mahaitgov.in\/income-certificate\/income-service-v1/);


    await page.waitForTimeout(3000);

    //await incomeCertificatePage.ConfirmIncomeCertificateHeader();

    



    
})

