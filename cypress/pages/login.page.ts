import {UnauthorizedPage} from "./unauthorized.page";
import {getUserDefaultData} from "../fixtures/user.data";

const defaultUser = getUserDefaultData();

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
    login (username = defaultUser.username, password = defaultUser.password) {
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
        cy.url().should('not.include','login');
    }

    verifyErrorInSignIn () {
        cy.url().should('include','app/login');
        cy.get('[type="submit"] + p').should('contain.text', 'Error in SignIn')
    }
}

export const loginPage = new LoginPage();
