import {UserType} from "../types/user.type";
import * as faker from "faker";

//This is test user info, that's not sensitive data
//TODO: for actual users please use .env approach
export const getUserDefaultData = (): UserType => ({
    username: "taras+auto@riffanalytics.ai",
    password: "12341234",
    name: "Auto Test"
})

export const getUserInvalidData = (): UserType => ({
    username: "taras+1@riffanalytics.ai",
    password: "invalid",
})

export const forgotPasswordData = () => ({
    email: `chcdz.test@inbox.testmail.app`,
    password: faker.internet.password(8)
})
