import { test, expect } from '@playwright/test';
import { TestConfig } from '../../test.config';
import { LoginPage } from '../../pages/LoginPage';
import { FHomePage } from '../../pages/Fungal_ExaminationPage/FHomePage';


test('Click on Fungal link', async ({ page }) => {

    test.setTimeout(60000);

    const testconfig = new TestConfig();
    const loginPage = new LoginPage(page);
    const homePage = new FHomePage(page);

    //await page.goto(testconfig.appUrl);
    await loginPage.login();
    await homePage.ClickfHomePage();

    await page.waitForTimeout(3000);
});