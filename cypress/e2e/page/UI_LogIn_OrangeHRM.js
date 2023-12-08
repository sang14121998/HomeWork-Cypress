const URL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
const USER_NAME = "input[placeholder='Username']";
const PASS_WORD = "input[placeholder='Password']";
const BTN_LOGIN = "button[type='submit']";

import DataOrange from "../../fixtures/DataORANGE.json"


export default class Login {
    get getUrlVisit() {
       return URL;
    }

    get getUsername() {
       return USER_NAME;
    }

    get getPassWord() {
       return PASS_WORD;
    }

    get getBtnLoginClick() {
       return BTN_LOGIN;
    }
}