import {GeneralPage} from "./general.page";
import {getUserDefaultData} from "../fixtures/user.data";

const defaultUser = getUserDefaultData();

export class ProfilePage extends GeneralPage{
    get logoutButton() { return cy.contains('Logout')}
    get name() { return cy.contains('Name')}
    get email() { return cy.contains('Email')}

    logout() {
        this.logoutButton.click()
        cy.url().should('include', 'login')
    }

    verifyUserInfo(name = defaultUser.name, email = defaultUser.username) {
        this.name.should('contain.text', name);
        this.email.should('contain.text', email)
    }
}

export const profilePage = new ProfilePage();
