import {UserType} from "../types/user.type";

//This is test user info, that's not sensitive data
//TODO: for actual users please use .env approach
export const getUserDefaultData = (): UserType => ({
    username: "taras+1@riffanalytics.ai",
    password: "12341234",
})
