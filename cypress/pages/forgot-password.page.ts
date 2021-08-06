import {UnauthorizedPage} from "./unauthorized.page";
import {Timeout} from "../fixtures/enums/timeout.enum";
import {Messages} from "../fixtures/enums/messages.enum";

export class ForgotPasswordPage extends UnauthorizedPage{
    get email () { return cy.get('#email') }
    get submitButton () { return cy.get('[type="submit"]')}
    get password () { return cy.get('#password')}
    get password2 () { return cy.get('#password2')}
    get alert () { return cy.get('[role="alert"]')}

    open() {
        cy.visit('/app/reset')
    }

    resetPassword(email: string) {
        this.email.type(email);
        this.submitButton.click();
    }

    setNewPassword(email: string, password: string) {
        cy.wait(Timeout.EMAIL_CONFIRMATION);
        cy.resetPassword(email);
        this.password.type(password);
        this.password2.type(password);
        this.submitButton.click();
        this.alert.should('have.text', Messages.PASSWORD_CHANGED)
    }
}
