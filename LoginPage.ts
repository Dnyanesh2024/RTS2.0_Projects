import { Page, Locator, expect } from '@playwright/test';
import { TestConfig } from '../test.config';

export class LoginPage {
    readonly page: Page;

    // Locators
    private readonly LoginWithAapleSarkarUserId: Locator;
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly captcha: Locator;
    private readonly loginButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;

        //this.praveshButton = page.locator('(//button[contains(@class, "login-btn")])[1]');
        this.LoginWithAapleSarkarUserId = page.getByText("Aaple Sarkar UserId ने लॉगिन करा", { exact: true });
        this.username = page.locator('#mat-input-0');
        this.password = page.locator('#mat-input-1');
        this.captcha = page.locator("input[placeholder='Enter CAPTCHA']");
        this.loginButton = page.locator("div.d-flex.gap-1 button[type='submit']");
    }

    
     //Clicks login-method-radio.
     
    async clicklogin_method_radio(): Promise<void> {
        //await expect(this.LoginWithoutMahaID).toBeVisible({ timeout: 10000 });
        await this.LoginWithAapleSarkarUserId .click();
        await this.page.waitForTimeout(1000); // Wait for any post-click actions    
    }
        
    /**
     * Sets the username.
     * @param username - Username to enter
     */
    async setUsername(username: string): Promise<void> {
        await expect(this.username).toBeVisible({ timeout: 5000 });
        await this.username.fill(username);
        await this.page.waitForTimeout(1000); // Wait for any post-fill actions     
    }

    /**
     * Sets the password.
     * @param password - Password to enter
     */
    async setPassword(password: string): Promise<void> {
        await expect(this.password).toBeVisible({ timeout: 5000 });
        await this.password.fill(password);
        await this.page.waitForTimeout(1000);
    }

    /**
     * Sets the CAPTCHA code.
     * @param captchaCode - CAPTCHA code to enter
     */
    async setCaptchaCode(captchaCode: string){ 
        await this.captcha.click();
        await this.captcha.fill(captchaCode);
        await this.page.waitForTimeout(1000);
    }
    /**
     * Clicks the Login button.
     */
    async clickLoginButton(): Promise<void> {
        await expect(this.loginButton).toBeVisible({ timeout: 10000 });
        await expect(this.loginButton).toBeEnabled({ timeout: 10000 });
        await this.loginButton.click();
        await this.page.waitForTimeout(1000); // Wait for navigation or any post-login actions
    }

    /**
     * Performs the complete login flow.
     */
    async login(){
        const testconfig = new TestConfig();
        await this.page.goto(testconfig.appUrl);
        await this.clicklogin_method_radio();
        await this.setUsername(testconfig.username);
        await this.setPassword(testconfig.password); 
        await this.captcha.waitFor({ state: 'visible' });
        await this.captcha.click();

        await this.page.waitForTimeout(10000); // Wait for manual CAPTCHA entry if needed   
        //await this.setCaptchaCode(config.captchaCode);
        
        await this.clickLoginButton();
    }
}