import {expect, Locator, Page} from "@playwright/test";

export class IncomeDetails{

    readonly page:Page;

    // Locator

    private readonly incomeDatails: Locator;
    private readonly sheti:Locator;
    private readonly shetiPurakvyavasay:Locator;
    private readonly shetiMajurycheUtpann:Locator;
    private readonly otherIncome:Locator;
    private readonly otherBusiness:Locator;
    private readonly shetiSivayitar:Locator;
    private readonly serviceIncome:Locator;
    private readonly InvestmentInterest:Locator;
    private readonly ExcludingAbove:Locator;
    private readonly IAgreeChechbox:Locator;
    private readonly submitButton:Locator;
    //


    // Constructor

    constructor(page:Page){
        this.page=page;

        this.incomeDatails = page.getByText("Income Details");
        this.sheti = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(1);
        this.shetiPurakvyavasay = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(2);
        this.shetiMajurycheUtpann = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(3);
        this.otherIncome = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(4);
        this.otherBusiness = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(5);
        this.shetiSivayitar = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(6);
        this.serviceIncome = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(7);
        this.InvestmentInterest = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(8);
        this.ExcludingAbove = page.locator("input[class='isg-input ng-untouched ng-pristine ng-valid']").nth(9);
        this.IAgreeChechbox = page.locator("input[value='true']");
        this.submitButton = page.locator("button[class='btn btn-success']");


    }

    // Methods
    async income_Details(){
        await expect(this.incomeDatails).toBeVisible();
    }
    async Sheti(){
        await this.sheti.click();
        await this.sheti.fill("1000");
    }
    async sheti_Purvak_Vyavasay(){
        await this.shetiPurakvyavasay.click();
        await this.shetiPurakvyavasay.fill("1000");
    }
    async sheti_MajuricheUtpann(){
        await this.shetiMajurycheUtpann.click();
        await this.shetiMajurycheUtpann.fill("1000");
    }
    async other_Income(){
       await this.otherIncome.click();
       await this.otherIncome.fill("1000");
    }
    async other_Business(){
        await this.otherBusiness.click();
        await this.otherBusiness.fill("1000");
    }
    async shetiShivay_Itar(){
        await this.shetiSivayitar.click();
        await this.shetiSivayitar.fill("1000");
    }
    async service_Income(){
       await this.serviceIncome.click();
       await this.serviceIncome.fill("1000");
    }
    async Investment_Interest(){
        await this.InvestmentInterest.click();
        await this.InvestmentInterest.fill("1000");
    }
    async Excluding_Above(){
        await this.ExcludingAbove.click();
        await this.ExcludingAbove.fill("1000");
    }
    async IAgree_Check_Box(){
        await this.IAgreeChechbox.check();
        //await this.
    }
    async submit_Button(){
        await this.submitButton.click();
    }

    // Single Method for Income Deatails

    async Income_Details(){
       await this.income_Details();
       await this.Sheti();
       //await this.sheti_Purvak_Vyavasay();
       //await this.sheti_MajuricheUtpann();
       //await this.other_Income();
       //await this.other_Business();
       //await this.shetiShivay_Itar();
       //await this.service_Income();
       //await this.Investment_Interest();
       //await this.Excluding_Above();
       await this.IAgree_Check_Box();
       await this.submit_Button();
    }


}