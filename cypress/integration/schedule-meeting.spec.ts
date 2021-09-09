import {getMeetingData, getMeetingEditData, getMeetingInputData} from "../fixtures/meeting.data";
import {loginPage} from "../pages/login.page";
import {createMeetingPage} from "../pages/create-meeting.page";
import {meetingInfoPage} from "../pages/meeting-info.page";
import {preJoinMeetingPage} from "../pages/pre-join-meeting.page";
import {meetingListPage} from "../pages/meeting-list.page";

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

    it('Schedule a meeting - Input Data', () => {
        const meeting = getMeetingInputData();
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.verifyMeetingData(meeting);
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

    it('Start a Meeting', () => {
        const meeting = getMeetingData();
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.startMeeting();
        preJoinMeetingPage.verifyUsername();
    })

    it('Copy Meeting link', async () => {
        const meeting = getMeetingData();
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.copyMeetingLink();
        meetingInfoPage.verifyMeetingUrlEnv();
    })

    it('See meetings list', () => {
        const meeting = getMeetingData();
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingListPage.open();
        meetingListPage.verifyMeetingPresence(meeting.name);
    });

    it('Delete Meeting', () => {
        const meeting = getMeetingData();
        createMeetingPage.open();
        createMeetingPage.fillMeetingForm(meeting);
        createMeetingPage.saveMeeting();
        meetingInfoPage.deleteMeeting();
        meetingListPage.isLoaded();
    })
});

