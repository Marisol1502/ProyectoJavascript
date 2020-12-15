const SearchPage2 = require('../pageobjects/search2.page.js');


describe('Search2', () => {

    
    beforeEach( () => {

        SearchPage2.open();

    })

    it('verify the url changes according to the speciality changes', () => {
        
        SearchPage2.inputPhysicButton.click();
        expect(browser).toHaveUrlContaining('phisical');
        SearchPage2.inputLanguageButton.click();
        expect(browser).toHaveUrlContaining('language');
        SearchPage2.inputOcupationalButton.click();
        expect(browser).toHaveUrlContaining('ocupational');
    })
    it('verify when the text Maria is searchig, URL is reloaded and the first record is according to search', () => {
        //SearchPage2.open();
        SearchPage2.searchbar.click();
        SearchPage2.searchbar.setValue('Maria');
        SearchPage2.inputsearchbutton.click();
        expect(browser).toHaveUrlContaining('Maria');
        expect(SearchPage2.mariaresult).toHaveText('Maria José Miranda');
    })
    it('verify when click on list map, the map image dissapear', () => {
       // SearchPage2.open();
       // SearchPage2.mapicon.click();
        SearchPage2.listmap.click();
        expect(SearchPage2.map).not.toBeVisible();
    })

});