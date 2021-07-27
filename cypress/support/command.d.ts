declare namespace Cypress {
    interface Chainable {
        confirmEmail(email: string)
        resetPassword(email: string)
    }
}
