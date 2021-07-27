// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('confirmEmail', (email) => {
    const nameSpace = Cypress.env('NAMESPACE');
    const apiKey = Cypress.env('APIKEY');
    cy.request(`https://api.testmail.app/api/json?apikey=${apiKey}&namespace=${nameSpace}&pretty=true`).then(response => {
        const [lastEmail] = response.body.emails.filter(e => e.envelope_to === email);
        const verificationLink = lastEmail.text.split(': ')[1];
        cy.visit(verificationLink);
    });
});

Cypress.Commands.add('resetPassword', (email) => {
    const nameSpace = Cypress.env('NAMESPACE');
    const apiKey = Cypress.env('APIKEY');
    cy.request(`https://api.testmail.app/api/json?apikey=${apiKey}&namespace=${nameSpace}&pretty=true`).then(response => {
        const emails = response.body.emails.filter(e => e.envelope_to === email && e.subject.includes('password change'));
        let [lastEmail] = emails;
        emails.forEach(email => {
            if (email.date > lastEmail.date)
                lastEmail = email
        });
        console.log(emails, lastEmail);
        const passwordChangeLink = lastEmail.text.split(': ')[1];
        cy.visit(passwordChangeLink);
    });
});
