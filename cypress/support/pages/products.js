export class ProductsPage{
    constructor(){
        this.whitePantsButton = ('[id="whitepants"]')
        this.modalButton = ('#closeModal')
        this.redCapButton = ("[value='Red Cap']")
        this.buttonGoShoppingCart = ('#goShoppingCart')
    }
    selectWhitePants() 
    {
        cy.get(this.whitePantsButton).click();

    }
    clickOnClosemodal() 
    {
        cy.get(this.modalButton).click();

    }
    selectRedCap()
    {
        cy.get(this.redCapButton).click();
    }
    clickButtonGoShoppingCart()
    {
        cy.get(this.buttonGoShoppingCart).click();
    }

}