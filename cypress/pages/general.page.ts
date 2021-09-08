import {AbstractPage} from "./abstract.page";

export class GeneralPage extends AbstractPage {
    get scheduleAMeeting() { return cy.contains('Schedule a meeting')}
    get joinAMeeting() { return cy.contains('Join a meeting')}
    get avatar() { return cy.get('svg[class*="Avatar"]')}
    get profile() { return cy.contains('Profile')}
    get meetings() { return cy.contains('Meetings')}
    get riffMetrics() { return cy.contains('Riff Metrics')}
    get experimentalMetrics() { return cy.contains('Experimental Metrics')}

    open(): void {
        cy.visit("/")
    }

    async getCurrentUrl() {
        return new Promise<string>(resolve => cy.url().then(url => {
            resolve(url)
        }));
    }

    verifyJoinMeetingPage(){
        cy.url().should('contain','/app/join')
    }

    verifyScheduleMeetingPage(){
        cy.url().should('contain','/app/schedule')
    }

    verifyMeetingsPage(){
        cy.url().should('contain','/app/meetings')
    }

    verifyRiffMetricsPage(){
        cy.url().should('contain','/app/dashboard')
    }

    verifyExperimentalMetricsPage(){
        cy.url().should('contain','/app/experimental-dashboard')
    }
}
