import {Meeting, MeetingBuilder} from "../types/meeting.type";
import * as faker from "faker";

const meetingBuilder = new MeetingBuilder();


export const getMeetingData = (): Meeting => {
    return meetingBuilder
        .createMeeting(`Meeting ${faker.random.word()} ${faker.random.alphaNumeric(5)}`)
        .build();
}

export const getMeetingEditData = (): Meeting => {
    return meetingBuilder
        .createMeeting(`Edited Meeting ${faker.random.word()} ${faker.random.alphaNumeric(5)}`)
        .build();
}

export const getMeetingInputData = (): Meeting => {
    return meetingBuilder
        .createMeeting(`Meeting ${faker.random.word()} ${faker.random.alphaNumeric(5)}`, true)
        .build()
}

export const getPersonalMeetingData = (): Meeting => {
    return meetingBuilder
        .createMeeting(`Meeting ${faker.random.word()} ${faker.random.alphaNumeric(5)}`)
        .setDescription(faker.random.words(10))
        .setPersonalMeeting(true)
        .build();
}
