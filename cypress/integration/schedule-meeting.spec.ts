import {LoginPage} from "../pages/login.page";
import {CreateMeetingPage} from "../pages/create-meeting.page";
import {MeetingInfoPage} from "../pages/meeting-info.page";
import {getMeetingData, getMeetingEditData} from "../fixtures/meeting.data";

const loginPage = new LoginPage();
const createMeetingPage = new CreateMeetingPage();
const meetingInfoPage = new MeetingInfoPage();


describe('Meetings Tests', () => {
    beforeEach(() => {
        loginPage.open();
        loginPage.login();
        loginPage.verifyLogin()
    });

    it('Schedule a meeting', () => {
        const meeting = getMeetingData();
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.verifyMeetingName(meeting.name);
    })

    it('Edit Meeting', () => {
        const meeting = getMeetingData();
        const meetingUpdate = getMeetingEditData();
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.verifyMeetingName(meeting.name);
        meetingInfoPage.editMeeting();
        createMeetingPage.fillMeetingForm(meetingUpdate);
        createMeetingPage.saveMeeting();
        meetingInfoPage.verifyMeetingName(meetingUpdate.name)
    })
});

