const URL = "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee";
const FIRST_NAME = "input[placeholder='First Name']";
const MID_NAME = "input[placeholder='Middle Name']";
const LAST_NAME = "input[placeholder='Last Name']";
const ID_EMPLOYEE = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']";
const BTN_SAVE = "button[type='submit']";

import DataOrange from "../../fixtures/DataORANGE.json"
export default class AddEmployee {
    get getUrlVisit() {
        return (
            cy.visit(URL)
        )
    }

    get getFirstNameInput() {
        return (
            cy.get(FIRST_NAME).should("be.enabled").clear()
            .type(DataOrange.data_add_emp.firstNameAdd)
        )
    }

    get getMidNameInput() {
        return (
            cy.get(MID_NAME).should("be.enabled").clear()
            .type(DataOrange.data_add_emp.midNameAdd)
        )
    }

    get getLastNameInput() {
        return (
            cy.get(LAST_NAME).should("be.enabled").clear()
            .type(DataOrange.data_add_emp.lastNameAdd)
        )
    }

    get getIdEmpInput() {
        return (
            cy.xpath(ID_EMPLOYEE).should("be.enabled").clear()
            .type(DataOrange.data_add_emp.idEmpAdd)
        )
    }

    get getBtnSaveClick() {
        return (
            cy.get(BTN_SAVE).should("be.enabled").click()
        )
    }

    


}
