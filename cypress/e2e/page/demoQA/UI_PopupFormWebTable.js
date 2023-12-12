const POPUP = ".modal-content";
const FIRT_NAME = "#firstName";
const LAST_NAME = "#lastName";
const EMAIL = "#userEmail";
const AGE = "#age";
const SALARY = "#salary";
const DEPARTMENT = "#department";
const BTN_SUBMIT = "#submit";

export default class Popup_RegistrationForm {
    get getPopupCheckVisible() {
        return (
            cy.get(POPUP).should("be.visible")
        )
    }

    get getPopupCheckNotExist() {
        return (
            cy.get(POPUP).should("not.exist")
        )
    }

    get getFirstName() {
        return FIRT_NAME;
    }

    get getLastName() {
        return LAST_NAME;
    }

    get getAge() {
        return AGE;
    }

    get getEmail() {
        return EMAIL;
    }

    get getSalary() {
        return SALARY;
    }

    get getDepartment() {
        return DEPARTMENT;
    }

    get getBtnSubmitClick() {
        return (
            cy.get(BTN_SUBMIT).should("be.enabled").click()
        )
    }

   

}