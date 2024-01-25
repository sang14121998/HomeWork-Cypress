import loginUi from '../../page/loginMyBizFly'
import {Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor"

const login = new loginUi();

Given('Truy cập trang login', () => {
    cy.visit(login.getURL);
})

When ('Nhập {string} vào textbox account', (username) => {
    if (username) {
        cy.xpath(login.getUsername).type(username);
        
    }
})

Then ('Click on "Tiếp tục" button để chuyển đến màn nhập password', () => {
    cy.xpath(login.getBtnContinue).click();
})


When ('Nhập {string} vào textbox password', (password) => {
    if (password) {
        cy.xpath(login.getPassword).type(password);
    }
})


When ('Click on "Đăng nhập bằng ViệtID" button', () => {
    cy.xpath(login.getBtnLogin).should('be.enabled').click();
})

Then ('Login thành công, hiển thị trang MyBizFly tương ứng', () => {
    cy.url().should('include', 'https://my.bizfly.vn/');
})

Given('Đã login thành công với tài khoản username {string} và password {string}', (username, password) => {
    cy.visit(login.getURL);
    cy.xpath(login.getUsername).type(username);
    cy.xpath(login.getBtnContinue).click();
    cy.xpath(login.getPassword).type(password);
    cy.xpath(login.getBtnLogin).should('be.enabled').click();
    cy.url().should('include', 'https://my.bizfly.vn/');
    cy.visit('https://my.bizfly.vn/');
    cy.get('.btn_action').contains("Bắt đầu").click({force:true});


    

})