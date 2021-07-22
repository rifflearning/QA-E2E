import {GeneralPage} from "./general.po";

export class ProfilePage extends GeneralPage{
    get logoutButton() {return cy.contains('Logout')}

    logout() {
        this.logoutButton.click()
        cy.url().should('include', 'login')
    }
}
