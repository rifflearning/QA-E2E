export class PreJoinMeetingPage {
    get username() { return cy.get('.field')}

    verifyUsername(name = 'Auto Test') {
        this.username
            .then(el => el[0].getAttribute('value'))
            .should('equal', name);
    }
}

export const preJoinMeetingPage = new PreJoinMeetingPage();
