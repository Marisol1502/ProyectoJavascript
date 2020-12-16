const SearchPage = require('../pageobjects/search.page.js');


describe('Search', () => {

    
    beforeEach( () => {

        SearchPage.open();

    })
    it('search without enter data', () => {
        SearchPage.open();
        browser.pause(2000);
        SearchPage.inputSearchBox.click();
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/');
            
    });
    it('verify clicking a  category the search button has focus', () => {
        SearchPage.open();
       
       SearchPage.inputPhisicalCategory.click();
       expect(SearchPage.searchfield).toBeFocused();
       SearchPage.pageclick.click();
       SearchPage.inputLanguageCategory.click();
       expect(SearchPage.searchfield).toBeFocused();
       SearchPage.pageclick.click();
       SearchPage.inputOcupationalCategory.click();
       expect(SearchPage.searchfield).toBeFocused();
    });

    it('verify searching Maria text', () => {
        SearchPage.open();
        SearchPage.searchfield.click();
        SearchPage.searchfield.setValue('Maria');
        SearchPage.inputSearchBox.click();
        browser.url('https://develop.terapeutica.digital/#/search?sp=ocupational&q=Maria');
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/search?sp=ocupational&q=Maria');
        expect(SearchPage.mariaresult).toHaveText('Maria José Miranda');
    });   
   
});


