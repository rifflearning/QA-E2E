import {loginPage} from "../pages/login.page";
import {unauthorizedPage} from "../pages/unauthorized.page";
import {signUpPage} from "../pages/sign-up.page";
import {forgotPasswordPage} from "../pages/forgot-password.page";
import {generalPage} from "../pages/general.page";
import {profilePage} from "../pages/profile.page";

describe("Navigation tests", () => {
    context('Unauthorized navigation', () => {
        it.skip('Join a meeting button navigation', () => {
            loginPage.open();
            loginPage.joinMeetingButton.click();
            unauthorizedPage.verifyJoinMeetingPage()
        })

        it('Sign Up button navigation', () => {
            loginPage.open();
            loginPage.signUpButton.click();
            signUpPage.verifySignupPage();
        })

        it('Sign Up hyper link navigation', () => {
            loginPage.open();
            loginPage.signUpLink.click();
            signUpPage.verifySignupPage();
        })

        it('Forgot Password hyper link navigation', () => {
            loginPage.open();
            loginPage.forgotPasswordLink.click();
            forgotPasswordPage.verifyForgotPasswordPage()
        })

        it('Forgot Password to Sign Up', () => {
            forgotPasswordPage.open();
            forgotPasswordPage.signUpLink.click();
            signUpPage.verifySignupPage();
        })

        it('Sign Up to Sign In navigation', () => {
            signUpPage.open();
            signUpPage.signInLink.click();
            loginPage.verifyLoginPage();
        })
    })

    context('General Page navigation', () => {
        beforeEach(() => {
            loginPage.open();
            loginPage.login();
            loginPage.verifyLogin()
        });

        it.skip('Join a meeting navigation', () => {
            generalPage.joinAMeeting.click();
            generalPage.verifyJoinMeetingPage();
        })

        it('Schedule a meeting navigation', () => {
            generalPage.scheduleAMeeting.click();
            generalPage.verifyScheduleMeetingPage();
        })

        it('Avatar profile navigation', () => {
            generalPage.avatar.click();
            profilePage.verifyUserInfo();
        })

        it('Profile navigation', () => {
            generalPage.profile.click();
            profilePage.verifyUserInfo();
        })

        it('Meetings navigation', () => {
            generalPage.meetings.click();
            profilePage.verifyMeetingsPage();
        })

        it('Riff Metrics navigation', () => {
            generalPage.riffMetrics.click();
            profilePage.verifyRiffMetricsPage();
        })

        it('Meetings navigation', () => {
            generalPage.experimentalMetrics.click();
            profilePage.verifyExperimentalMetricsPage();
        })
    })
})
