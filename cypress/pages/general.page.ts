import {AbstractPage} from "./abstract.page";

export class GeneralPage extends AbstractPage {
    get scheduleAMeeting() { return cy.contains('Schedule a meeting')}
    get joinAMeeting() { return cy.contains('Join a meeting')}

    open(): void {
        cy.visit("/")
    }
}
