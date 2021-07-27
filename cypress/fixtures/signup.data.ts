import {SignUpUserData} from "../types/signup.type";
import * as faker from "faker";

export const signupData = (): SignUpUserData => ({
    name: faker.name.firstName() + faker.name.lastName(),
    email: faker.internet.email("Test", "Riff", "riffanalytics.ai"),
    password: "12341234",
    password2: "12341234"
})

export const signupDataWithConfirmationEmail = (): SignUpUserData => ({
    name: faker.name.firstName() + faker.name.lastName(),
    email: `chcdz.test+${faker.random.alphaNumeric(10)}@inbox.testmail.app`,
    password: "12341234",
    password2: "12341234"
})
