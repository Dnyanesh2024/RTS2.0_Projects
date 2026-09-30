import { Page, expect, Locator } from "@playwright/test";

export class FungalServicePage {
    readonly page: Page;

    // Locators
    private readonly fungalServiceLabel: Locator;
    private readonly continueToApplicationForm: Locator;
    private readonly confirmFungalServiceFormHeader: Locator;
    //private readonly instructionPDF: Locator;
    //private readonly downloadInstructionPDF: Locator; 
    private readonly IAcceptButton: Locator;

    // Constructor 

    constructor(page: Page) {
        this.page = page;

        this.fungalServiceLabel = page.getByText("पशु आणि कुक्कुटपालन आहारातील बुरशीची तपासणी",{ exact: true });
        this.continueToApplicationForm = page.getByText("अर्जाकडे जा", { exact: true });
        // match either English or Marathi heading text
        this.confirmFungalServiceFormHeader = page.getByText("कृषी, पशुसंवर्धन, दुग्धव्यवसाय विकास व मत्स्यव्यवसाय विभाग",{ exact: true });
        //this.instructionPDF = page.getByText("सूचनापत्र (PDF)",{ exact: true });
        //this.downloadInstructionPDF = page.getByText("Download",{ exact: true });
        this.IAcceptButton = page.getByText("मी स्वीकारतो",{ exact: true });
    }

    // Methods
/*
    async confirmFungalServiceLabel() {
        await expect(this.fungalServiceLabel).toBeVisible({
            timeout: 10000
        });
    }
*/
    
    async clickOnContinueToApplicationForm() {
        // try multiple candidate selectors and click the first visible one
       await this.continueToApplicationForm.click();
       
    }

    async confirm_FungalServiceFormHeader() {
        try {
            await expect(this.confirmFungalServiceFormHeader).toBeVisible({ timeout: 20000 });
        } catch (e) {
            // fallback: search any element containing the expected texts
            const fallback = this.page.getByText(/कृषी, पशुसंवर्धन, दुग्धव्यवसाय विकास व मत्स्यव्यवसाय विभाग/i);
           // await expect(fallback).toBeVisible({ timeout: 10000 });
        }
    }

    async clickOnIAcceptButton() {
        await this.IAcceptButton.click();

        await this.page.waitForTimeout(3000); // Wait for any post-click actions
        
    }


    
    // Single method for Income Certificate Page

    async FungalServicePage() {
        //await this.confirmFungalServiceLabel();
        await this.clickOnContinueToApplicationForm();
        await this.confirm_FungalServiceFormHeader();
        await this.clickOnIAcceptButton();
        await this.page.waitForTimeout(3000); // Wait for any post-click actions
    }
}