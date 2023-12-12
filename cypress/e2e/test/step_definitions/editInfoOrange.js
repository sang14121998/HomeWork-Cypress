import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DetailInfo from "../../page/orangeHRM/UI_DetailEmp_OrangeHRM";

import {faker} from '@faker-js/faker';

const detailInfo = new DetailInfo();




When ("Chuyển đến trang My Info" , function() {
 
 cy.contains("My Info").click();
})

Then("Hiển thị trang My Info", function() {
    cy.url().should("contain", "viewPersonalDetails/empNumber")
})

When("Nhập data edit theo data faker vào form", function() {
    let firstName = faker.name.firstName();
let midName = faker.name.firstName();
let lastName = faker.name.lastName(); 
   cy.get(detailInfo.getFirstName).type(firstName);
   cy.get(detailInfo.getMidName).type(midName);
   cy.get(detailInfo.getLastName).type(lastName);

})
When('Click "Save" button', function() {
    cy.get(detailInfo.getBtnSave1).click();
})
Then('Edit info emp thành công', function() {
    cy.url().should('viewPersonalDetails/empNumber');
})