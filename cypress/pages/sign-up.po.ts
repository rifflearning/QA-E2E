import {UnauthorizedPage} from "./unauthorized.po";
import {SignUpUserData} from "../types/signup.type";
import {Timeout} from "../fixtures/enums/timeout.enum";

export class SignUpPage extends  UnauthorizedPage{
    get name () { return cy.get('#name') }
    get email () { return cy.get('#email') }
    get password () { return cy.get('#password')}
    get password2 () { return cy.get('#password2')}
    get consentCheckbox () { return cy.get('[value="agreeTermsAndPolicy"]')}
    get submitButton () { return cy.get('[type="submit"]')}
    get signUpMessage () { return cy.get('h5')}

    open() {
        cy.visit('/app/signup')
    }

    completeSignUp(data: SignUpUserData) {
        this.signUpButton.click();
        this.name.type(data.name);
        this.email.type(data.email);
        this.password.type(data.password);
        this.password2.type(data.password2);
        this.consentCheckbox.click();
        this.submitButton.click();
    }

    verifyEmailForSignUp(data) {
        cy.wait(Timeout.EMAIL_CONFIRMATION);
        cy.confirmEmail(data.email);
    }
    verifySignUpMessage() {
        this.signUpMessage.should('have.text', 'Please check your email to complete registration.');
    }
}
