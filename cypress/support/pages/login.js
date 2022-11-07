export class Login {
    constructor() {
        this.userInput = '[id="user"]'
        this.passInput = '#pass'
        this.loginButton = '[id="submitForm"]'
    }


    writingUser(user) {
    cy.get(this.userInput).type(user);
    }

    writingPass(pass) {
        cy.get(this.passInput).type(pass);
        }
    clickLoginButton(){
        cy.get(this.loginButton).click();
    }
    }

