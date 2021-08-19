import {GeneralPage} from "./general.page";
import {Meeting} from "../types/meeting.type";

export class MeetingInfoPage extends GeneralPage {
    get meetingName() { return cy.contains('Name')}
    get meetingDesc() { return cy.contains('Description')}
    get startButton() { return cy.contains('Start')}
    get editButton() { return cy.contains('Edit')}
    get copyLinkButton() { return cy.contains('Copy link')}
    get deleteButton() { return cy.contains('Delete')}
    get okButton() { return cy.contains('Ok')}
    get cancelButton() { return cy.contains('Cancel')}
    get waitForHostText() { return cy.contains('Wait for a host of the meeting')}
    get forbidNewText() { return cy.contains('Forbid new participants after the meeting is over')}
    get allowGuestText() { return cy.contains('Allow guest users')}
    get roomNumber() { return cy.get('#room-number')}

    get checkmarkIconSelector() { return '[d*="M16.59"]'}
    get crossIconSelector() { return '[d*="14.59"]'}

    verifyMeetingName(name: string) {
        this.meetingName.should('be.visible');
        cy.contains(name).should('be.visible');
    }

    verifyMeetingDescription(description: string) {
        this.meetingDesc.should('be.visible');
        cy.contains(description).should('be.visible');
    }

    editMeeting(){
        this.editButton.click();
    }

    deleteMeeting(){
        this.deleteButton.click();
        this.okButton.click();
    }

    startMeeting(){
        this.startButton.click();
    }

    copyMeetingLink(){
        this.copyLinkButton.click();
    }

    verifyMeetingUrlEnv(){
        cy.verifyClipboardText(Cypress.config().baseUrl);
    }

    verifyIsOptionAllowed(textElement: Cypress.Chainable, allowed: boolean){
       textElement
           .parent('div')
           .get('path')
           .get(allowed ? this.checkmarkIconSelector : this.crossIconSelector)
           .should('be.visible')
    }

    verifyMeetingData(meeting: Meeting){
        this.verifyMeetingName(meeting.name);
        this.verifyMeetingDescription(meeting.description);
        this.verifyIsOptionAllowed(this.allowGuestText, meeting.allowAnon);
        this.verifyIsOptionAllowed(this.forbidNewText, meeting.forbidNewParticipants);
        this.verifyIsOptionAllowed(this.waitForHostText, meeting.waitForHost);
        if (meeting.multipleRooms)
            this.roomNumber.should('be.visible');
    }
}
