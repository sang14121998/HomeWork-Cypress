
import loginPage from "../../page/UI_LogIn_OrangeHRM" 
const loginOrange = new loginPage();


import {Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor"
// login is succes
Given("Tôi đã chuyển đến trang login", function() {
    cy.visit(loginOrange.getUrlVisit);
})

When("Nhập {string} và {string} vào textbox username và password", (username, password) => {
    if (username) {
        cy.get(loginOrange.getUsername).type(username);
    }
    if(password) {
        cy.get(loginOrange.getPassWord).type(password);
    }
})

When("Click vào'Login' button", function() {
    cy.get(loginOrange.getBtnLoginClick).click();
})

Then("Hiển thị trang Dashboard", function() {
    cy.url("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
})

// login fail with table

When("Tôi đã nhập thông tin Scenario", (dataTable) => {
    dataTable.hashes().forEach(data => {
    if (dataTable.username) {
        cy.get(loginOrange.getUsername).type(data.username);
    }
    if(dataTable.password) {
        cy.get(loginOrange.getPassWord).type(data.password);
    }
        
        
    });
}
)
Then("Vẫn ở trang login", function() {
    cy.url(loginOrange.getUrlVisit)
})

// dùng exmaple 


