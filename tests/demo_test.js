let LoginPage = require("../page_objects/login_page.js");

describe('login suite', function() {
    it('login pass test', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
      /*allure.createStep('login', function() {})();
      allure.createStep('login', function() {
        await loginPage.open();
        let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");
      });      */ 

      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      //console.log(productsPage.header + '####################################');
      await browser.sleep(3000);

      await productsPage.header.getAdministrationMenu().click();

      /*allure.createStep('login', function() {})();
      allure.createStep('login', function() {
        await productsPage.header.getAdministrationMenu().click();
      });*/

      await browser.sleep(3000);

      let newProductPage = await productsPage.addProduct(); 

      //let newProductPage = await productsPage.createProduct();

      await browser.sleep(3000);

      await newProductPage.createProduct('Alyona_Gladych Product 4');

      /*allure.createStep('login', function() {})();
      allure.createStep('login', function() {
        let newProductPage = await productsPage.addProduct(); 
        await newProductPage.createProduct('Alyona_Gladych Product 4');

      });*/

      await browser.sleep(3000);

      //await console.log(element(by.css('.section-title.display-mode .section-title__details-id')).getText() + '#############################');

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.isIdVisible()).toEqual(true);
    });
  });