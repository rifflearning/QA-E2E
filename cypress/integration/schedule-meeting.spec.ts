import {LoginPage} from "../pages/login.page";
import {CreateMeetingPage} from "../pages/create-meeting.page";
import {MeetingInfoPage} from "../pages/meeting-info.page";
import {getMeetingData, getMeetingEditData, getMeetingInputData} from "../fixtures/meeting.data";
import {MeetingListPage} from "../pages/meeting-list.page";
import {PreJoinMeetingPage} from "../pages/pre-join-meeting.page";
import {JoinAMeetingPage} from "../pages/join-a-meeting.page";

const loginPage = new LoginPage();
const createMeetingPage = new CreateMeetingPage();
const meetingInfoPage = new MeetingInfoPage();
const meetingListPage = new MeetingListPage();
const preJoinMeetingPage = new PreJoinMeetingPage();
const joinMeetingPage = new JoinAMeetingPage();
let meetingId;

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

