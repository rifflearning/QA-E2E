import {AbstractPage} from "./abstract.page";

export class UnauthorizedPage extends AbstractPage{
    get joinMeetingButton() { return cy.contains('Join a meeting')}
    get signInButton() { return cy.contains('Sign In')}
    get signUpButton() { return cy.contains('Sign Up')}

    open () {
        cy.visit('/app/login')
    }
}
