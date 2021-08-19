import {GeneralPage} from "./general.page";

export class JoinAMeetingPage extends GeneralPage{
    get meetingInput() { return cy.get('[name="room"]')}
    get joinButton() { return cy.get('[type="submit"]')}
    open() {
        cy.visit('/app/join')
    }

    joinMeeting(meetingId: string) {
        this.meetingInput.paste(meetingId);
        this.joinButton.click()
    }
}
