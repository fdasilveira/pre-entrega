export class ShopingCartPage{
    constructor()
    {
        this.showtotal = ('//button[text()="Show total price"]');
        this.total = "#price";
    }
    verifyProduct(verifyproduct)
    {
        return cy.get(`p[name='${verifyproduct}']`);
    }
    verifyPricesAndProducts(Name,Price){
        return cy.xpath(`//p[@name='${Name}']//following-sibling::p[@name=${Price}]`);

    }
    clickOnShowTotalPrice(){
        return cy.xpath(this.showtotal);
    }
    checkAcumulatePrice(){
        return cy.get(this.total);
    }
}
