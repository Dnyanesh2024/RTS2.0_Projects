import { expect, Locator, Page  } from "@playwright/test";

export class DocumentUpload{

    readonly page:Page;

    // Locator

    private readonly documentUpload: Locator;
    private readonly mandetoryDocuments: Locator;
    private readonly clickselectDropdown: Locator;
    // private readonly identityProof: Locator;
    // private readonly CkickIdentityDropdown: Locator;
    // private readonly clickSuccessPopUpMessage: Locator;
    // private readonly photo: Locator;
    // private readonly clickPhotoDropDown: Locator;
    // private readonly cliclUseAadhaarPhoto: Locator;
    // private readonly clickAcceptAndUpload: Locator;
    // private readonly addressProof: Locator;
    // private readonly aadhaarCard: Locator;
    // private readonly clickaddressProofDropDown: Locator;
    // private readonly clickReuseDocumentPopup: Locator;
    // private readonly clickDocumentReusedSuccessfully: Locator;
    // private readonly adgeProof: Locator;
    // private readonly panCard: Locator;
    // private readonly selfDeclaration: Locator;
    // private readonly clickSubmitButton: Locator;
    //private readonly panCard: Locator;
    //private readonly panCard: Locator;
    //private readonly panCard: Locator;


    // Constroctor

    constructor(page:Page){
        this.page = page;

        this.documentUpload = page.getByText("Document Upload");
        this.mandetoryDocuments = page.getByText("अनिवार्य कागदपत्रे").nth(1);
        this.clickselectDropdown = page.locator('select[ class="form-select ng-valid ng-touched ng-dirty"]').nth(1);
        //this.panCard = page.locator
        // this.identityProof = page.locator
        // this.CkickIdentityDropdown = page.locator
        // this.clickSuccessPopUpMessage = page.locator
        // this.photo = page.locator
        // this.clickPhotoDropDown = page.locator
        // this.cliclUseAadhaarPhoto = page.locator
        // this.clickAcceptAndUpload = page.locator
        // this.addressProof = page.locator
        // this.aadhaarCard = page.locator
        // this.clickaddressProofDropDown = page.locator
        // this.clickReuseDocumentPopup = page.locator
        // this.clickDocumentReusedSuccessfully = page.locator
        // this.adgeProof = page.locator
        
        // this.selfDeclaration = page.locator
        // this.clickSubmitButton = page.locator
        //this.sheti = page.locator
    }

    // Methods

    async Document_Upload(){
       await expect(this.documentUpload).toBeVisible();
    }
    
    async Mandatory_Documents(){
        await expect(this.mandetoryDocuments).toBeVisible();
        await this.clickselectDropdown.click();
        await this.clickselectDropdown.selectOption("पॅन कार्ड");
    }

}