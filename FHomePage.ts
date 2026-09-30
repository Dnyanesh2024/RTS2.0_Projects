import { Page, Locator, expect } from "@playwright/test";

export class FHomePage {
    readonly page: Page;

    // Locators
    private readonly homePageTitle: Locator;
    private readonly DeptAnimalHusbandary: Locator;
    private readonly AnimalHusbandaryDeptScheme: Locator;
    private readonly clickonSearchTextBox: Locator;
    private readonly fungalExamination: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;

        this.homePageTitle = page.locator(".emblem.text-center");

        //this.page.locator('महसूल विभाग').scrollIntoViewIfNeeded();

        this.DeptAnimalHusbandary = page.getByText("कृषी, पशुसंवर्धन, दुग्धव्यवसाय विकास व मत्स्यव्यवसाय विभाग", { exact: true });
        this.AnimalHusbandaryDeptScheme = page.getByText("पशुसंवर्धन विकास विभाग", { exact: true });

        // Use accessible locator instead of Angular-generated #mat-input-0
        this.clickonSearchTextBox = page.getByRole("textbox", {name: "Search Services" });

        this.fungalExamination = page.getByText("पशु आणि कुक्कुटपालन आहारातील बुरशीची तपासणी",{ exact: true });


    }

    // Methods
    async clickOnDeptAnimalHusbandary() {

        await expect(this.DeptAnimalHusbandary).toBeVisible();
        await this.DeptAnimalHusbandary.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnAnimalHusbandaryScheme() {
        //await expect(this.AnimalHusbandaryDeptScheme).toBeVisible();
        await this.AnimalHusbandaryDeptScheme.click();
        await this.page.waitForTimeout(1000);

    }

    async clickOnSearchTextBox() {
        await expect(this.clickonSearchTextBox).toBeVisible();
        await this.clickonSearchTextBox.click();
        await this.page.waitForTimeout(1000);

    }

    async searchService(serviceName: string) {
        await expect(this.clickonSearchTextBox).toBeVisible();
        await this.clickonSearchTextBox.fill("पशु आणि कुक्कुटपालन आहारातील बुरशीची तपासणी");
        await this.clickonSearchTextBox.press("Enter");
        await this.page.waitForTimeout(1000);
    }

    async clickOnfungalExamination() {
        await expect(this.fungalExamination).toBeVisible();
        await this.fungalExamination.click();
        await this.page.waitForTimeout(1000);

    }

    async ClickfHomePage(){
        await this.clickOnDeptAnimalHusbandary();
        await this.clickOnAnimalHusbandaryScheme();
        await this.clickOnSearchTextBox();
        await this.searchService('पशु आणि कुक्कुटपालन आहारातील बुरशीची तपासणी');
        await this.clickOnSearchTextBox();
        await this.page.waitForTimeout(10000);    
        await this. clickOnfungalExamination();
        await this.page.waitForTimeout(10000);


    }

}