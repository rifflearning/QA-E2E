import {signUpPage} from "../pages/sign-up.page";
import {signupData, signupDataWithConfirmationEmail} from "../fixtures/signup.data";
import {profilePage} from "../pages/profile.page";

describe('Sign-up Tests', () => {
   it('Sign Up with correct data', () => {
       const signUpData = signupData();
       signUpPage.open();
       signUpPage.completeSignUp(signUpData);
       signUpPage.verifySignUpMessage();
   })

    it('Sign Up with Verification', () => {
        const signUpData = signupDataWithConfirmationEmail();
        signUpPage.open();
        signUpPage.completeSignUp(signUpData);
        signUpPage.verifyEmailForSignUp(signUpData);
        profilePage.verifyUserInfo(signUpData.name, signUpData.email);
    })
});

