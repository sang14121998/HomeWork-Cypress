import DataOrange from "../../fixtures/orange_emp.json"
import VarOrange from "../OrangeHRM/ORANGE"
import EditInfoPage from "../OrangeHRM/EditInfoPage"

const varOrange = new VarOrange();
describe("Test add and edit info a employee", () => {
    // it("TC1- Add and edit info for new an employee is successfully", ()=> {
    //     // login
    //     cy.visit(varOrange.getUrlLogin);
    //     cy.inputData(varOrange.getUserLogin, DataOrange.data_login.username);
    //     cy.inputData(varOrange.getPassLogin, DataOrange.data_login.password);
    //     cy.xpath(varOrange.getBtnLogin).click();

    //     // add new an emp
    //     cy.visit(varOrange.getUrlAddEmp);
    //     cy.inputData(varOrange.getFisrtNameAdd, DataOrange.data_add_emp.firstNameAdd);
    //     cy.inputData(varOrange.getMidNameAdd, DataOrange.data_add_emp.midNameAdd);
    //     cy.inputData(varOrange.getLastNameAdd, DataOrange.data_add_emp.lastNameAdd);
    //     cy.inputData(varOrange.getIdEmpAdd, DataOrange.data_add_emp.idEmpAdd);
    //     cy.xpath(varOrange.getBtnSaveEmpAdd).click();
    //     cy.url().should("contain", varOrange.getCheckUrlEditInfo);

    //     // edit info 
    //     cy.inputData(varOrange.getFirstNameEdit, DataOrange.data_edit_info_emp.firstNameEdit);
    //     cy.inputData(varOrange.getMidNameEdit, DataOrange.data_edit_info_emp.midNameEdit);
    //     cy.inputData(varOrange.getLastNameEdit, DataOrange.data_edit_info_emp.lastNameEdit);
    //     cy.xpath(varOrange.getBtnSaveEmpEdit).click();
    //     cy.url().should("contain", varOrange.getCheckUrlEditInfo);
        
    //     // verifi info edited
    //     cy.verifiDataInputed(varOrange.getFirstNameEdit, DataOrange.data_edit_info_emp.firstNameEdit);
    //     cy.verifiDataInputed(varOrange.getMidNameEdit, DataOrange.data_edit_info_emp.midNameEdit);
    //     cy.verifiDataInputed(varOrange.getLastNameEdit, DataOrange.data_edit_info_emp.lastNameEdit);
    // })

    // it("Update profile success", () => {
    //     editInfoPage = new EditInfoPage()
    //     editInfoPage.visit();
    //     editInfoPage.typeUserns

    // })

    it("TC2-  Add and edit info for new an employee is fail when require field is blank", () => {
        // login
        cy.visit(varOrange.getUrlLogin);
        cy.inputData(varOrange.getUserLogin, DataOrange.data_login.username);
        cy.inputData(varOrange.getPassLogin, DataOrange.data_login.password);
        cy.xpath(varOrange.getBtnLogin).click();

        // add new an emp
        cy.visit(varOrange.getUrlAddEmp);
        cy.inputData(varOrange.getFisrtNameAdd, DataOrange.data_add_emp.firstNameAdd);
        cy.inputData(varOrange.getMidNameAdd, DataOrange.data_add_emp.midNameAdd);
        cy.inputData(varOrange.getLastNameAdd, DataOrange.data_add_emp.lastNameAdd);
        cy.inputData(varOrange.getIdEmpAdd, DataOrange.data_add_emp.idEmpAdd);
        cy.xpath(varOrange.getBtnSaveEmpAdd).click();
        cy.url().should("contain", varOrange.getCheckUrlEditInfo);

        // edit info 
        cy.xpath(varOrange.getFirstNameEdit).clear();
        cy.xpath(varOrange.getMidNameEdit).clear();
        cy.xpath(varOrange.getLastNameEdit).clear();
        cy.xpath(varOrange.getBtnSaveEmpEdit).click();
        cy.url().should("contain", varOrange.getCheckUrlEditInfo);

        // verifi info edited
        cy.verifiDataInputed(varOrange.getFirstNameEdit, "");
        cy.verifiDataInputed(varOrange.getMidNameEdit,"");
        cy.verifiDataInputed(varOrange.getLastNameEdit, "");




    })
})
