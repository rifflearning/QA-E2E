export class MeetingInfoPage {
    get meetingName() { return cy.contains('Name')}
    get startButton() { return cy.contains('Start')}
    get editButton() { return cy.contains('Edit')}
    get copyLinkButton() { return cy.contains('Copy Link')}
    get deleteButton() { return cy.contains('Delete')}
    get okButton() { return cy.contains('Ok')}
    get cancelButton() { return cy.contains('Cancel')}

    verifyMeetingName(name: string) {
        this.meetingName.should('be.visible')
        cy.contains(name).should('be.visible');
    }

    editMeeting(){
        this.editButton.click();
        this.okButton.click();
    }
}
