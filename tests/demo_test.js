let LoginPage = require("../page_objects/login_page.js");

describe('login suite', function() {
    it('login pass test', async function() {
      
      allure.createStep('login', function() {
        let loginPage = new LoginPage();
        await loginPage.open();
        let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");
      });  

      allure.createStep('open admin menu', function() {
        await productsPage.header.getAdministrationMenu().click();
      });

      allure.createStep('create new product', function() {
        let newProductPage = await productsPage.addProduct(); 
        await newProductPage.createProduct('Alyona_Gladych Product 4');

      });

      await browser.sleep(3000);

     expect(await productsPage.header.isHeaderVisible()).toEqual(true);
     expect(await newProductPage.isIdVisible()).toEqual(true);
    });
  });
