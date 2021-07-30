import {getUserDefaultData, getUserInvalidData} from "../fixtures/user.data";
import {LoginPage} from "../pages/login.po";
import {ProfilePage} from "../pages/profile.po";

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

describe("Login tests", () => {
    it('Login with default user', () => {
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
