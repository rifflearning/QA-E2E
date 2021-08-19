declare namespace Cypress {
    interface Chainable {
        confirmEmail(email: string)
        resetPassword(email: string)
        setCheckbox(state: boolean)
        paste(text: string)
        verifyClipboardText(expectedText: string)
    }
}
