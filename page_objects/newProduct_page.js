let productNameInputLocator = "#product-name";
let productFamilyDropdownLocator = "dropdown-gds .multiselect-container .dropdown-toggle .caret";
//let productDescriptionInputLocator = "#product-name";
//let RepositoryInputLocator = "#product-name";
let cancelBtnLocator = "btn gds-btn gds-btn-default";
let saveBtnLocator = "#saveProductAdd";
let productFamilyLocator ='#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > ul > li:nth-child(7) > a > span';
let productIdLocator = '.section-title.display-mode .section-title__details-id';  //'.modified-group-wrapper'; //'#toast-container > div > div:nth-child(2) > span';

class NewProductPage {
    constructor() {
        browser.waitForAngularEnabled(false);
    }

    getProductNameInput() {
        return element(by.css(productNameInputLocator));
    }

    getProductFamilyDropdown() {
        return element(by.css(productFamilyDropdownLocator));
    }

    getproductFamilyLocator() {
        return element(by.css(productFamilyLocator));
    }

    getcancelBtn() {
        return element(by.css(cancelBtnLocator));
    }

    getsaveBtn() {
        return element(by.css(saveBtnLocator));
    }

    getProductId() {
        return element(by.css(productIdLocator));
    }
   
    async createProduct(name) {
        await this.getProductNameInput().sendKeys(name);
        await this.getProductFamilyDropdown().click();
        await this.getproductFamilyLocator().click();
        await this.getsaveBtn().click();

        //return this.getConfirmMessage(); //.getText();
    }

    async waitForIdAvailable() {
            await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getProductId()), 15000);
        }
    
        async isIdVisible() {
            await this.waitForIdAvailable();
            return await this.getProductId().isDisplayed();
        }
}

module.exports = NewProductPage;