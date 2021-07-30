import {GeneralPage} from "./general.po";

export class ProfilePage extends GeneralPage{
    get logoutButton() { return cy.contains('Logout')}
    get name() { return cy.contains('Name')}
    get email() { return cy.contains('Email')}

    logout() {
        this.logoutButton.click()
        cy.url().should('include', 'login')
    }

    verifyUserInfo(name: string, email: string) {
        this.name.should('contain.text', name);
        this.email.should('contain.text', email)
    }
}
