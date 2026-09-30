import { Page, expect, Locator } from "@playwright/test";

export class IncomeCertificatePage {
    readonly page: Page;

    // Locators
    private readonly confirmincomecertificatelabel: Locator;
    private readonly continueToApplicationForm: Locator;
    private readonly confirmIncomeCertificateHeader: Locator;

    // Constructor

    constructor(page: Page) {
        this.page = page;

        this.confirmincomecertificatelabel = page.getByText("Income Certificate",{ exact: true });

        this.continueToApplicationForm = page.getByRole("button", {name: /Continue/i});

        // match either English or Marathi heading text

        this.confirmIncomeCertificateHeader = page.getByRole("heading", { name: /उत्पन्नाचा दाखला|Income Certificate/i, exact: true });
    }

    // Methods

    async confirmIncomeCertificateLabel() {
        await expect(this.confirmincomecertificatelabel).toBeVisible({
            timeout: 10000
        });
    }

    
    async clickOnContinueToApplicationForm() {
        // try multiple candidate selectors and click the first visible one
        const candidates: Locator[] = [
            this.page.getByRole('button', { name: /Continue/i }),
            this.page.locator("button[type='submit']"),
            this.page.locator('.btn.btn-primary.btn-lg'),
            this.page.getByText(/Continue/i)
        ];

        for (const loc of candidates) {
            try {
                await expect(loc).toBeVisible({ timeout: 3000 });
                await expect(loc).toBeEnabled({ timeout: 3000 });
                await loc.click();
                return;
            } catch (e) {
                // not found or not ready, try next
            }
        }

        // none matched
        throw new Error('Continue button not found using any candidate selectors');
    }

    async ConfirmIncomeCertificateHeader() {
        try {
            await expect(this.confirmIncomeCertificateHeader).toBeVisible({ timeout: 20000 });
        } catch (e) {
            // fallback: search any element containing the expected texts
            const fallback = this.page.getByText(/उत्पन्नाचा दाखला|Income Certificate/i);
            await expect(fallback).toBeVisible({ timeout: 20000 });
        }
    }

    
    // Single method for Income Certificate Page

    async IncomeCertificatePage() {
        await this.confirmIncomeCertificateLabel();
        await this.clickOnContinueToApplicationForm();
        await this.ConfirmIncomeCertificateHeader();
    }
}