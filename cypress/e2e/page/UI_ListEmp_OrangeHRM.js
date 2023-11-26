const URL = "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList";
const ID_EMPLOYEE = "(//input[@class='oxd-input oxd-input--active'])[2]";
const BTN_SEARCH = "button[type='submit']"
const TABLE_EMP = "div[role='table']";
const ROW_TABLE = ".oxd-table-card";
const CELL_TABLE = "div[class = 'oxd-table-cell oxd-padding-cell']";
const CHECKBOX_ROW = "div[class ='oxd-checkbox-wrapper'";


import DataOrange from "../../fixtures/DataORANGE.json"


export default class SearchEmp {
    get getUrl() {
        return (
            cy.visit(URL)
        )
    }

    get getIdEmpInput() {
        cy.xpath(ID_EMPLOYEE).should("be.enabled").clear()
        .type(DataOrange.data_edit_info_emp.idEmpEdit)
    }

    get getIdEmp() {
        return ID_EMPLOYEE
    }

    get getBtnSearchClick() {
        return (
            cy.get(BTN_SEARCH).should("be.enabled").click()
        )
    }

    get FindEmpReturnData() {
        cy.get(CHECKBOX_ROW).should("not.be.checked");

        cy.get(TABLE_EMP)
          .find(ROW_TABLE)
          .eq(0)
          .find(CELL_TABLE)
          .eq(1)
          .should("have.text", DataOrange.data_edit_info_emp.idEmpEdit);

        cy.get(TABLE_EMP)
          .find(ROW_TABLE)
          .eq(0)
          .find(CELL_TABLE)
          .eq(2)
          .should("have.text", DataOrange.data_edit_info_emp.halftNameEdit);

        cy.get(TABLE_EMP)
          .find(ROW_TABLE)
          .eq(0)
          .find(CELL_TABLE)
          .eq(3)
          .should("have.text", DataOrange.data_edit_info_emp.lastNameEdit);

    }

}



