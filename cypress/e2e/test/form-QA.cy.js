import FormDemoQA from "../page/FormDemoQA";
import Data_Form from "../../fixtures/form_demo_qa.json";


const formQA = new FormDemoQA();

describe("Test form", () => {
    it("TC1- submit form is successfully", () => {
        cy.visit(formQA.getUrl);
        // cy.xpath(formQA.getFirstName).type(Data_Form.data_form.firstName);
        // cy.xpath(formQA.getLastName).type(Data_Form.data_form.lastName);
        // cy.xpath(formQA.getMale).click();
        // cy.xpath(formQA.getPhoneNumber).type(Data_Form.data_form.phoneNumber);
        // cy.xpath(formQA.getSubmitButton).click({force: true});

        cy.inputText(formQA.getFirstName, Data_Form.data_form.firstName );
        cy.inputText(formQA.getLastName, Data_Form.data_form.lastName);
        cy.inputText(formQA.getPhoneNumber, Data_Form.data_form.phoneNumber );
        cy.checkGender(formQA.getMale);
        cy.xpath(formQA.getSubmitButton).click({force: true});
    })
})