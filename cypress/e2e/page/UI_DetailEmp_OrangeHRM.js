const FIRST_NAME = "input[placeholder='First Name']";
const MID_NAME = "input[placeholder='Middle Name']";
const LAST_NAME = "input[placeholder='Last Name']";
const ID_EMPLOYEE = "(//input[@class='oxd-input oxd-input--active'])[3]";
const BTN_SAVE_1 = "(//button[@type='submit'][normalize-space()='Save'])[1]";

import DataOrange from "../../fixtures/DataORANGE.json"

export default class DetailInfo {
    
    get getFirstNameInput() {
        return (
            cy.get(FIRST_NAME).should("be.enabled").clear()
            .type(DataOrange.data_edit_info_emp.firstNameEdit)
        )
    }

    get getFirstName() {
        return FIRST_NAME
    }

    get getMidNameInput() {
        return (
            cy.get(MID_NAME).should("be.enabled").clear()
            .type(DataOrange.data_edit_info_emp.midNameEdit)
        )
    }

    get getMidName() {
        return MID_NAME
    }

    get getLastNameInput() {
        return (
            cy.get(LAST_NAME).should("be.enabled").clear()
            .type(DataOrange.data_edit_info_emp.lastNameEdit)
        )
    }

    get getLastName() {
        return LAST_NAME
    }

    get getIdEmpInput() {
        return (
            cy.xpath(ID_EMPLOYEE).should("be.enabled").clear()
            .type(DataOrange.data_edit_info_emp.idEmpEdit)
        )
    }

    get getIdEmp() {
        return ID_EMPLOYEE;
    }


    get getBtnSave1Click() {
        return (
            cy.xpath(BTN_SAVE_1).should("be.enabled").click()
        )
    }
}