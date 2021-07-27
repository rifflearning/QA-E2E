import {SignUpPage} from "../pages/sign-up.po";
import {signupData, signupDataWithConfirmationEmail} from "../fixtures/signup.data";
import {Timeout} from "../fixtures/enums/timeout.enum";

const signUpPage = new SignUpPage();

describe('Sign-up Tests', () => {
   it('Sign Up with correct data', () => {
       const signUpData = signupData();
       signUpPage.open();
       signUpPage.completeSignUp(signUpData);
       signUpPage.verifySignUpMessage();
   })

    it.only('Sign Up with Verification', () => {
        const signUpData = signupDataWithConfirmationEmail();
        signUpPage.open();
        signUpPage.completeSignUp(signUpData);
        signUpPage.verifyEmailForSignUp(signUpData)
    })
});

