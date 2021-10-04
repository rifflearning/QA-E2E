import {getUserDefaultData, getUserInvalidData} from "../fixtures/user.data";
import {loginPage} from "../pages/login.page";
import {profilePage} from "../pages/profile.page";


describe("Login tests", () => {
    it('Login with default user - With Data', () => {
        const loginData = getUserDefaultData();
        loginPage.open();
        loginPage.login(loginData.username, loginData.password);
        loginPage.verifyLogin();
        profilePage.verifyUserInfo(loginData.name, loginData.username)
    })

    it('Login with invalid user credentials', () => {
        const loginData = getUserInvalidData();
        loginPage.open();
        loginPage.login(loginData.username, loginData.password);
        loginPage.verifyErrorInSignIn();
    })


    it('Logout with default user', () => {
        const loginData = getUserDefaultData();
        loginPage.open();
        loginPage.login(loginData.username, loginData.password);
        profilePage.logout();
    });
})
