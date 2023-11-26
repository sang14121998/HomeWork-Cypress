const URL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
const USER_NAME = "input[placeholder='Username']";
const PASS_WORD = "input[placeholder='Password']";
const BTN_LOGIN = "button[type='submit']";

import DataOrange from "../../fixtures/DataORANGE.json"


export default class Login {
    get getUrlVisit() {
        return (
            cy.visit(URL)
        )
    }

    get getUsername() {
        return (
            cy.get(USER_NAME).should("be.enabled").clear().type(DataOrange.data_login.username)
        )
    }

    get getPassWord() {
        return (
            cy.get(PASS_WORD).should("be.enabled").clear().type(DataOrange.data_login.password)
        )
    }

    get getBtnLoginClick() {
        return (
            cy.get(BTN_LOGIN).should("be.enabled").click()
        )
    }
}