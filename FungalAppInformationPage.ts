import { Page, Locator, expect } from "@playwright/test";


export class FungalAppInformationPage {
    readonly page: Page;    

    // Locators
    //private readonly instructionPDF: Locator;
    //private readonly downloadInstructionPDF: Locator; 
    private readonly clickOnIAcceptButton: Locator;
    private readonly applicantInformationLabel: Locator;
    private readonly clickOccupationDropdown: Locator;
    //private readonly selectOccupationOption: Locator;
    private readonly typeOfIncomeCertificateDropdown: Locator;
    private readonly clickDistrictDropdown: Locator;
   // private readonly DistrictOption: Locator;
    private readonly clickTalukaDropdown: Locator;
    //private readonly TalukaOption: Locator;
    private readonly clickVillageDropdown: Locator;
    //private readonly selectVillageOption: Locator;
    private readonly enterPincode: Locator;
    private readonly clickSavebutton: Locator;

    

    // Constructor
    constructor(page: Page) {
        this.page = page;
        
        //this.instructionPDF = page.getByText("सूचनापत्र (PDF)",{ exact: true });
        //this.downloadInstructionPDF = page.getByText("Download",{ exact: true });
        this.clickOnIAcceptButton = page.getByText("मी स्वीकारतो",{ exact: true });
        this.applicantInformationLabel = page.getByText("Applicant Information",{ exact: true });      
        this.clickOccupationDropdown = page.locator("select[formcontrolname='OccupationID']");
        //this.selectOccupationOption = page.locator("अभियंता");
        this.typeOfIncomeCertificateDropdown = page.locator("select[formcontrolname='IncomeTypeId']");
        this.clickDistrictDropdown = page.locator("select[formcontrolname='District']");
        //this.DistrictOption = page.getByText("अहिल्यानगर");
        this.clickTalukaDropdown = page.locator("select[formcontrolname='Taluka']");
        //this.TalukaOption = page.getByText("अकोले");
        this.clickVillageDropdown = page.locator("select[formcontrolname='Village']");
        //this.selectVillageOption = page.getByRole("option", {name: "Village Option"});
        this.enterPincode = page.getByRole("textbox", {name: "Pincode"}); 
       // this.clickSavebutton = page.locator("button[class='btn btn-primary']");
        this.clickSavebutton = page.getByText("Save & Next");
        //this.clickSavebutton = page.getByRole('button', { name: 'button' })
       
    }

    // Methods
    /*
    async clickInstructionPDF() {
        await this.instructionPDF.click();
    }

    async clickDownloadInstructionPDF() {
        await this.downloadInstructionPDF.click();
    }
   */
    async clickIAcceptButton() {
        await this.clickOnIAcceptButton.click();
    }

    // Redirect on popup page of Applicant Information Page and scroll down to the bottom of the page and click on I Accept button.
    
    async ApplicantInformationLabel() {
        await expect(this.applicantInformationLabel).toBeVisible({timeout: 10000});
        
    }  
    
    async ClickOccupationDropdown() {
        //await expect(this.clickOccupationDropdown).toBeVisible();
        await this.clickOccupationDropdown.click();
        //await this.clickOccupationDropdown.selectOption("अभियंता");
        await this.clickOccupationDropdown.selectOption({value:'28: 5'});
        
    }   

    // async SelectOccupationOption(){
    //    // await expect(this.selectOccupationOption).toBeVisible();
    //     await this.selectOccupationOption.selectText('अभियंता');

    // }

     async TypeOfIncomeCertificate(){
         //await expect(this.selectCertificateofOccupation).toBeVisible();
         await this.typeOfIncomeCertificateDropdown.click();
         await this.typeOfIncomeCertificateDropdown.selectOption({value:"4: 2"});
         
     }

    async ClickDistrictDropdown() {
        //await expect(this.clickDistrictDropdown).toBeVisible();
        await this.clickDistrictDropdown.click();
        await this.clickDistrictDropdown.selectOption({value:'36: 466'});

    }

    // async SelectDistrictOption(district: string){
    //     await expect(this.DistrictOption).toBeVisible();
    //     await this.DistrictOption.fill(district);
        
    // }

    async ClickTalukaDropdown() {
        await expect(this.clickTalukaDropdown).toBeVisible();
        await this.clickTalukaDropdown.click();
        await this.clickTalukaDropdown.selectOption({value:"1: 4201"});

    }

    // async SelectTalukaOption(taluka: string){
    //     await expect(this.TalukaOption).toBeVisible();
    //     await this.TalukaOption.fill(taluka);
    // }

    async ClickVillageDropdown() {
        await expect(this.clickVillageDropdown).toBeVisible();
        await this.clickVillageDropdown.click();
        await this.clickVillageDropdown.selectOption({value:"377: 557127"});
        
    }

    // async SelectVillageOption(village: string){
    //     await expect(this.selectVillageOption).toBeVisible();
    //     await this.selectVillageOption.fill(village);
    // }

    async EnterPincode() {
        //await expect(this.enterPincode).toBeVisible();
        await this.enterPincode.clear();
        await this.enterPincode.fill("422604");

    }

    async ClickOnSavebutton(){
        await this.clickSavebutton.click();
    }    

    // Single method for Applicant Information Page

    async ClickApplicantInformationPage(testconfig: any, pincode: string) {

        await this.ApplicantInformationLabel();
        await this.ClickOccupationDropdown();
        await this.TypeOfIncomeCertificate();
        //await this.SelectCertificateOfOccupation();
        await this.ClickDistrictDropdown();
        //await this.SelectDistrictOption(config.district);
        await this.ClickTalukaDropdown();
        //await this.SelectTalukaOption(config.taluka);
        await this.ClickVillageDropdown();
        //await this.SelectVillageOption(config.village   );
        await this.EnterPincode();
        await this.ClickOnSavebutton();
        await this.ClickOnSavebutton();

    }   

}