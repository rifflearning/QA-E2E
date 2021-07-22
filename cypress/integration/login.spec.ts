import {getUserDefaultData} from "../fixtures/user-data";
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
    })

    it('Logout with default user', () => {
        const loginData = getUserDefaultData();
        loginPage.open();
        loginPage.login(loginData.username, loginData.password);
        profilePage.logout();
    });
})
