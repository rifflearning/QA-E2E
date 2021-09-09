import {AbstractPage} from "./abstract.page";

export class UnauthorizedPage extends AbstractPage{
    get joinMeetingButton() { return cy.contains('Join a meeting')}
    get signInButton() { return cy.contains('Sign In')}
    get signUpButton() { return cy.contains('Sign Up')}
    get signUpLink() { return cy.contains('Don\'t have an account? Sign Up')}
    get forgotPasswordLink() {return cy.contains('Forgot password?')}
    open() {
        cy.visit('/app/login')
    }

    verifyLoginPage() {
        cy.url().should('contain','/app/login')
    }

    verifyJoinMeetingPage(){
        cy.url().should('contain','/app/join')
    }

    verifySignupPage(){
        cy.url().should('contain', '/app/signup')
    }

    verifyForgotPasswordPage(){
        cy.url().should('contain', '/app/reset')
    }
}

export const unauthorizedPage = new UnauthorizedPage();
