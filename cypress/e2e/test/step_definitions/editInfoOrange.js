import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DetailInfo from "../../page/UI_DetailEmp_OrangeHRM";
import LoginOrange from "../../page/UI_LogIn_OrangeHRM";

const detailInfo = new DetailInfo();
const loginOrange = new LoginOrange();
Given("Tôi truy cập website và login thành công với username, password", ('Admin', 'admin123'));
When ("Chuyển đến trang My Info" , function() {
 
 cy.get("//a[@class='oxd-main-menu-item active']").click();
})

Then("Hiển thị trang My Info", function() {
    cy.url().should("contain", "viewPersonalDetails/empNumber")
})

When("Nhập data edit theo data faker vào form", function() {
   cy.get(detailInfo.getFirstName).type(faker.)
})