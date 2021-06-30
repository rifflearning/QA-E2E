import {getUserDefaultUser} from "../fixtures/user-data";
import {LoginPage} from "../pages/login.po";

const loginPage = new LoginPage();

describe("Login tests", () => {
    it('Login with default user', () => {
        const loginData = getUserDefaultUser();
        loginPage.open();
        loginPage.login(loginData.username, loginData.password);
    })
})
