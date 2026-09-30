import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    readonly page: Page;

    // Locators
    private readonly homePageTitle: Locator;
    private readonly clickonRevenue: Locator;
    private readonly clickonMahasulSeva: Locator;
    private readonly clickonSearchTextBox: Locator;
    private readonly clickonIncomeCertificate: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;

        this.homePageTitle = page.locator(".emblem.text-center");

        //this.page.locator('महसूल विभाग').scrollIntoViewIfNeeded();

        this.clickonRevenue = page.getByText("महसूल विभाग", { exact: true });
        this.clickonMahasulSeva = page.getByText("महसूल सेवा", { exact: true });

        // Use accessible locator instead of Angular-generated #mat-input-0
        this.clickonSearchTextBox = page.getByRole("textbox", {
            name: "Search Services"
        });

        this.clickonIncomeCertificate = page.getByText(
            "Income Certificate Prod 13 JunCopy",
            { exact: true }
        );

    }

    // Methods
    async clickOnRevenue() {
        // await expect(this.page).toHaveURL(
        //     "https://rts2uat.mahaitgov.in/user/view"
        // );

        await expect(this.clickonRevenue).toBeVisible();
        await this.clickonRevenue.click();

        await expect(this.clickonMahasulSeva).toBeVisible();
        await this.clickonMahasulSeva.click();
    }

    async clickOnMahasulSeva() {
        await expect(this.clickonMahasulSeva).toBeVisible();
        await this.clickonMahasulSeva.click();
    }

    async clickOnSearchTextBox() {
        await expect(this.clickonSearchTextBox).toBeVisible();
        await this.clickonSearchTextBox.click();
    }

    async searchService(serviceName: string) {
        await expect(this.clickonSearchTextBox).toBeVisible();
        await this.clickonSearchTextBox.fill("Income Certificate");
        await this.clickonSearchTextBox.press("Enter");
    }

    
    
    async clickOnIncomeCertificate() {
        await expect(this.clickonIncomeCertificate).toBeVisible();
        await this.clickonIncomeCertificate.click();
    }

    async ClickHomePage(){
        await this.clickOnRevenue();
        await this.clickOnMahasulSeva();
        await this.clickOnSearchTextBox();
        await this.searchService('Income Certificate');
        await this.clickOnSearchTextBox();        
        await this. clickOnIncomeCertificate();
        await this.page.waitForTimeout(10000);


    }

}