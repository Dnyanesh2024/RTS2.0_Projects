import {expect, Locator, Page  } from "@playwright/test";

export class BeneficiaryInformation{

    readonly page:Page;

    // Locators 

    // Beneficiary Inforemation

    private readonly clickRelationDropdown: Locator;
    //private readonly clickRelationDropdown: Locator;
    private readonly beneficiaryDetail: Locator;
    private readonly clickSavebutton: Locator;


    // Constructor

    constructor(page: Page){
        this.page = page;

        // Beneficiary Inforemation
        this.beneficiaryDetail = page.getByText("Beneficiary Detail");
        this.clickRelationDropdown = page.locator(".form-select.ng-untouched.ng-pristine.ng-invalid");
        this.clickSavebutton = page.getByText("Save & Next");

         

    }

    // Beneficiary Information Methods

    async BeneficiaryDetail(){
        await this.page.waitForTimeout(1000);
        await expect(this.beneficiaryDetail).toBeVisible();

    }

    async ClickOnRelationDrowpdown(){

        await this.clickRelationDropdown.click();
        this.clickRelationDropdown.selectOption({value:"22: 9"});
    }

    async ClickOnSavebutton(){
        await this.clickSavebutton.click();
    }

    // Single method for Beneficiary

    async Beneficiary_Information(){

       await this.BeneficiaryDetail();
       await this.ClickOnRelationDrowpdown();
       await this.ClickOnSavebutton();
    }

}