import { test, expect, Config } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/homePage';


test('Click on Revenue link', async ({ page }) => {

    test.setTimeout(60000);

    const testconfig = new TestConfig();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    //await page.goto(testconfig.appUrl);
    await loginPage.login();
    await homePage.ClickHomePage();
    await page.waitForTimeout(3000);
   
   // Login page actions

   
    
    // await loginPage.clickPraveshButton();
    // await loginPage.setUsername(testconfig.username);
    // await loginPage.setPassword(testconfig.password);
    // await loginPage.setCaptchaCode('');
    // await page.waitForTimeout(10000);
    // await loginPage.clickLoginButton();
    // await page.waitForTimeout(10000);

    //await homePage.ClickHomePage();

    

    // get the home page title and verify it
    /*const homePageTitle = await homePage.getHomePageTitle();
    expect(homePageTitle).toBe(' आपले सरकार मध्ये आपले स्वागत आहे - ०६ ऑगस्ट, २०२६ ');  
*/
    // Click on Revenue link
    /*
    await expect(page).toHaveURL('https://rts2uat.mahaitgov.in/user/view');
    await expect(page.getByText('महसूल विभाग')).toBeVisible();
    await homePage.clickOnRevenue();
    await homePage.clickOnMahasulSeva();

    await homePage.clickOnSearchTextBox();
    await homePage.searchService('Income Certificate');
    await homePage.clickOnSearchTextBox();        
    await homePage.clickOnIncomeCertificate();

    //await page.waitForTimeout(10000);
*/


});
