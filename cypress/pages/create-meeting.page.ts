import {GeneralPage} from "./general.page";
import {Meeting} from "../types/meeting.type";

export class CreateMeetingPage extends GeneralPage{
    get nameInput()             { return cy.get('#name')}
    get personalMeetingTab()    { return cy.contains('Use Personal Meeting Room')}
    get description()           { return cy.get('#description')}
    get datePicker()            { return cy.get('[aria-label="change date"]')}
    get timePicker()            { return cy.get('[aria-label="change time"]')}
    get durationHours()         { return cy.get('#duration-hours')}
    get durationMins()          { return cy.get('#duration-minutes')}
    get timezone()              { return cy.get('#time-zone')}
    get isRecurring()           { return cy.get('[name="recurringMeeting"]')}
    get allowAnon()             { return cy.get('[name="allowAnonymous"]')}
    get waitForHost()           { return cy.get('[name="waitForHost"]')}
    get forbidNewParticipants() { return cy.get('[name="forbidNewParticipantsAfterDateEnd"]')}
    get multipleRooms()         { return cy.get('[name="isMultipleRooms"]')}
    get saveButton()            { return cy.contains('Save')}
    get cancelButton()          { return cy.contains('Cancel')}

    open () {
        cy.visit('/app/create')
    }

    fillMeetingForm(meeting: Meeting) {
        if (meeting.personalMeeting) {
            this.personalMeetingTab.click({force: true});
        } else {
            this.nameInput.clear().type(meeting.name);
            meeting.description &&
            this.description.clear({force: true})
                .type(meeting.description, {force: true});
            this.allowAnon.setCheckbox(meeting.allowAnon);
            this.waitForHost.setCheckbox(meeting.waitForHost);
            this.isRecurring.setCheckbox(meeting.isRecurring);
            this.forbidNewParticipants.setCheckbox(meeting.forbidNewParticipants);
            this.multipleRooms.setCheckbox(meeting.multipleRooms);
        }
    }

    saveMeeting() {
        this.saveButton.click();
    }

    cancel() {
        this.cancelButton.click();
    }

}

export const createMeetingPage = new CreateMeetingPage();
