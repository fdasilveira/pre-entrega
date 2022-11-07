export class ShopingCartPage{
    constructor()
    {
        this.showtotal = ('//button[text()="Show total price"]');
        this.total = "#price";
    }
    verifyPriceWhitePants(){
        return cy.get('[name="20"]');
        
    }
    verifyNameWhitePants(){
        return cy.get('[name="White Pants"]');
        
    }
    verifyPriceAndProductWhitePants(Name,Price){
        return cy.xpath(`//p[@name='${Name}']//following-sibling::p[@name=${Price}]`);
    }
    verifyPriceRedCap(){
        return cy.get('[name="10"]');
    }
    veryfyNameRedCap(){
        return cy.get('[name="Red Cap"]');
    } 
    veryfyPriceAndProductRedCap(Name,Price){
        return cy.xpath(`//p[@name='${Name}']//following-sibling::p[@name=${Price}]`);
    }
    clickOnShowTotalPrice(){
        return cy.xpath(this.showtotal);
    }
    checkAcumulatePrice(){
        return cy.get(this.total);
    }
}
