//Login test 

import { test, expect,} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { TestConfig } from '../test.config';
 
/*
//let config: TestConfig;
//let loginPage: LoginPage;
 
// This hook runs before each test

test.beforeEach(async ({ page }) => {
config = new TestConfig();
 await page.goto(config.appUrl);
 await loginPage.setUsername(config.username);
 await loginPage.setPassword(config.password);
// Fill captcha manually in headed mode if neededallure generate allure-results --clean -o allure-report
 await loginPage.setCaptchaCode('');
 await page.waitForTimeout(10000);
 await loginPage.selectDistrict(config.district);
 await loginPage.clickLoginButton();
 await page.waitForTimeout(5000);


// Initialize page objects
    
   loginPage = new LoginPage(page);

});
// Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close();       // Close browser tab (good practice in local/dev run)
});

*/

  test('Login using valide username and password @master @sanity @regression', async ({ page }) => {

    test.setTimeout(60000);

    const loginPage = new LoginPage(page);

    const testconfig = new TestConfig();

    await page.goto(testconfig.appUrl, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    // await expect(page).toHaveTitle(/.+/);

    //Click on Login Without MahaID

    await loginPage.clicklogin_method_radio();

    // Enter valid username and password
 
    await loginPage.setUsername(testconfig.username);
    await loginPage.setPassword(testconfig.password);
    
    // Fill captcha manually in headed mode if needed
    await loginPage.setCaptchaCode('');
    await page.waitForTimeout(10000);

    await loginPage.clickLoginButton();
   
    await page.waitForTimeout(10000);

//await loginPage.setPassword(RandomDataUtil.getFirstName());

 
    
 
  
  });
