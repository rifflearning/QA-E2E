import * as faker from "faker";

export interface Meeting {
    name: string
    description?: string
    datePicker?: any
    timePicker?: number
    durationHours?: number
    durationMins?: number
    timezone?: string
    isRecurring?: boolean
    allowAnon?: boolean
    waitForHost?: boolean
    forbidNewParticipants?: boolean
    multipleRooms?: boolean
}

export class MeetingBuilder {
    meeting: Meeting;

    constructor() {
        this.meeting = null;
    }

    createMeeting(meeting: string|Meeting, prepopulateData = false) {
        if (typeof meeting === 'string')
            this.meeting = {name: meeting};
        else
            this.meeting = meeting
        if (prepopulateData) {
            this.meeting.description = faker.random.words(10);
            this.meeting.isRecurring = faker.datatype.boolean();
            this.meeting.allowAnon = faker.datatype.boolean();
            this.meeting.waitForHost = faker.datatype.boolean();
            this.meeting.forbidNewParticipants = faker.datatype.boolean();
            this.meeting.multipleRooms = faker.datatype.boolean();
        }
        return this;
    }

    setDescription(description: string) {
        this.meeting.description = description;
    }

    setIsRecurring(isRecurring: boolean) {
        this.meeting.isRecurring = isRecurring;
    }

    setAllowAnon(allowAnon: boolean) {
        this.meeting.allowAnon = allowAnon;
    }

    setWaitForHost(waitForHost: boolean) {
        this.meeting.waitForHost = waitForHost;
    }

    setForbidNewParticipants(forbidNewParticipants: boolean) {
        this.meeting.forbidNewParticipants = forbidNewParticipants;
    }

    setMultipleRooms(multipleRooms: boolean) {
        this.meeting.multipleRooms = multipleRooms;
    }

    build() {
        return this.meeting;
    }
}
