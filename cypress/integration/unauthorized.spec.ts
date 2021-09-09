import {forgotPasswordData} from "../fixtures/user.data";
import {forgotPasswordPage} from "../pages/forgot-password.page";

describe('Unauthorized User Tests', () => {
    it('Reset password', () => {
        const {email, password} = forgotPasswordData();
        forgotPasswordPage.open();
        forgotPasswordPage.resetPassword(email);
        forgotPasswordPage.setNewPassword(email, password)
    })
})
