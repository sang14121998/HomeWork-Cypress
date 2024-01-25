import TongQuanDuAn from '../../page/TongQuanProjectMyBiz'
import {Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor"

const tongQuanDuAn = new TongQuanDuAn()

When('Click vào Thêm nhân sự button', () => {
    cy.xpath(tongQuanDuAn.getBtnAddNhanSu).click();
})

When('Click vào Thêm thành viên trong dropdown', () => {
    cy.xpath(tongQuanDuAn.getBtnAddThanhVien).click();
})

When('Nhập email thành viên muốn thêm vào textbox email invite', () => {
    cy.xpath(tongQuanDuAn.getTextBoxInviteEmail).clear()
      .type('sang1412@yopmail.com')
})

When('Click Gửi lời mời button', ()=> {
    cy.xpath(tongQuanDuAn.getBtnSubmitInviteEmail).click();
})

Then('Thêm thành viên vào dự án thành công', () => {
    cy.visit('https://my.bizfly.vn/')
})