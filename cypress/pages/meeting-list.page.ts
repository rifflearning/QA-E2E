import {GeneralPage} from "./general.page";

export class MeetingListPage extends GeneralPage{
    get meetingsTabs() { return cy.get('[role="tablist"]')}

    open(){
        cy.visit('/app/meetings')
    }

    isLoaded(){
        this.meetingsTabs.should('be.visible');
    }

    verifyMeetingPresence(meetingName: string) {
        cy.contains(meetingName).should('exist');
    }
}
