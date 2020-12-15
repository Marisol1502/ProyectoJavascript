const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchBox () { return $('[value=Buscar]') }
    get inputPhisicalCategory () { return $('#custom-search-input > ul > li:nth-child(1) > label')}
    get inputLanguageCategory () { return $('#custom-search-input > ul > li:nth-child(2) > label')}
    get inputOcupationalCategory () { return $('#custom-search-input > ul > li:nth-child(3) > label')}
    get searchfield () { return $('#search-input')}
    get pageclick () { return $('body')}
    get mariaresult () { return $('h3')}
    
   

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    search () {
        
       
        this.inputSearchBox.click(); 
        
        this.inputPhisicalCategory.click(); 
        
        this.inputLanguageCategory.click(); 
        
        this.inputOcupationalCategory.click(); 
       
        this.searchfield.click(); 
        this.mariaresult.click();
       
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('https://develop.terapeutica.digital/#');
    }
}

module.exports = new SearchPage(); 
