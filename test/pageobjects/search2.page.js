const Page = require('./page');

class SearchPage2 extends Page {
    get inputPhysicButton () { return $('//*[@id="app"]/div/div/main/div/div/ul/li[1]/div/a[1]') }
    get inputLanguageButton () { return $('//*[@id="app"]/div/div/main/div/div/ul/li[1]/div/a[2]') }
    get inputOcupationalButton () { return $('//*[@id="app"]/div/div/main/div/div/ul/li[1]/div/a[3]')}
    get searchbar () { return $('#results > div > div > div:nth-child(2) > div > input.form-control')}
    get inputsearchbutton () { return $('[value=Buscar]')}
    get mariaresult () { return $('h3')}
    get listmap () { return $('//*[@id="app"]/div[2]/main/div[2]/div/ul/li[2]/div/a[1]/i')}
    get mapicon () { return $('//*[@id="app"]/div[2]/main/div[2]/div/ul/li[2]/div/a[2]/i')}
    get map () { return $('#map > div > div > div:nth-child(1) > div:nth-child(3)')}

    search2 () {
        
       
        this.inputSearchBox.click(); 
        this.searchbar.click();
    }
    open () {
        return super.open('https://develop.terapeutica.digital/#/search');
    }
}
module.exports = new SearchPage2(); 