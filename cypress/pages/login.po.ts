import {AbstractPage} from "./abstract.po";
import {UnauthorizedPage} from "./unauthorized.po";


export class LoginPage extends UnauthorizedPage {
    /**
     * Selectors for page elements should be added here
     */
    get inputUsername () { return cy.get('#email') }
    get inputPassword () { return cy.get('#password') }
    get btnSubmit () { return cy.get('button[type="submit"]') }

    /**
     * Add methods for page interaction
     */
    login (username: string, password: string) {
        this.inputUsername.type(username);
        this.inputPassword.type(password);
        this.btnSubmit.click();
    }

    /**
     * overwrite methods of parent Page
     */
    open () {
        cy.visit('/app/login')
    }

    verifyLogin () {
        cy.url().should('include','app')
    }

    verifyErrorInSignIn () {
        cy.url().should('include','app/login')
        cy.get('[type="submit"] + p').should('contain.text', 'Error in SignIn')
    }
}

