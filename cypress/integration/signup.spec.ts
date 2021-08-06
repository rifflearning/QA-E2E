import {SignUpPage} from "../pages/sign-up.page";
import {signupData, signupDataWithConfirmationEmail} from "../fixtures/signup.data";
import {ProfilePage} from "../pages/profile.page";

const signUpPage = new SignUpPage();
const profilePage = new ProfilePage();

describe('Sign-up Tests', () => {
   it.skip('Sign Up with correct data', () => {
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

