import {ForgotPasswordPage} from "../pages/forgot-password.po";
import {forgotPasswordData} from "../fixtures/user.data";

const forgotPasswordPage = new ForgotPasswordPage();

describe('Unauthorized User Tests', () => {
    it('Reset password', () => {
        const {email, password} = forgotPasswordData();
        forgotPasswordPage.open();
        forgotPasswordPage.resetPassword(email);
        forgotPasswordPage.setNewPassword(email, password)
    })
})
