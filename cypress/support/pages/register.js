export class Register {
    constructor() {
        this.buttonLogin = "#registertoggle";
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).dblclick();
    }



}