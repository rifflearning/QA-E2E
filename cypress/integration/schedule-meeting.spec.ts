import {
    getMeetingData,
    getMeetingEditData,
    getMeetingInputData,
    getPersonalMeetingData
} from "../fixtures/meeting.data";
import {loginPage} from "../pages/login.page";
import {createMeetingPage} from "../pages/create-meeting.page";
import {meetingInfoPage} from "../pages/meeting-info.page";
import {preJoinMeetingPage} from "../pages/pre-join-meeting.page";
import {meetingListPage} from "../pages/meeting-list.page";

const meeting = getMeetingData();
const meetingInput = getMeetingInputData();
const meetingUpdate = getMeetingEditData();
const personalMeeting = getPersonalMeetingData();

describe('Meetings Tests', () => {
    beforeEach(() => {
        loginPage.open();
        loginPage.login();
        loginPage.verifyLogin()
    });

    it('Schedule a meeting', () => {
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.verifyMeetingName(meeting.name);
    })

    it('Schedule a meeting - Input Data', () => {
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meetingInput);
        createMeetingPage.saveMeeting();
        meetingInfoPage.verifyMeetingData(meetingInput);
    })

    it('Edit Meeting', () => {
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.verifyMeetingName(meeting.name);
        meetingInfoPage.editMeeting();
        createMeetingPage.fillMeetingForm(meetingUpdate);
        createMeetingPage.saveMeeting();
        meetingInfoPage.verifyMeetingName(meetingUpdate.name)
    })

    it('Start a Meeting', () => {
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.startMeeting();
        preJoinMeetingPage.verifyUsername();
    })

    it('Copy Meeting link', () => {
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.copyMeetingLink();
        meetingInfoPage.verifyMeetingUrlEnv();
    })

    it('See meetings list', () => {
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingListPage.open();
        meetingListPage.verifyMeetingPresence(meeting.name);
    });

    it('Delete Meeting', () => {
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.deleteMeeting();
        meetingListPage.isLoaded();
    })

    it('Start a Personal Meeting', () => {
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(personalMeeting);
        meetingInfoPage.startMeeting();
        preJoinMeetingPage.verifyUsername();
    })
});

