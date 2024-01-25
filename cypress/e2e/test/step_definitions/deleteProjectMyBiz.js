import DropdownProject from "../../page/DropdownpProjectMyBizFly"
import CauHinhProject from "../../page/TongQuanProjectMyBiz"
import {Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor"

const dropdownProject = new DropdownProject()
const cauHinhProject = new CauHinhProject()
When('Chọn dự án muốn xóa từ dropdown choose project', () => {
    cy.xpath(dropdownProject.getBtnSelectProject).click({force: true});   
})

Then('Click vào cấu hình button', () => {
    cy.xpath(cauHinhProject.getBtnCauHinh).click({force: true})
})

When('Click vào Xóa dự án button', () => {
    cy.xpath(cauHinhProject.getBtnDelProject).click()
})

When('Click vào Xóa dự án button trong popup confirm xóa dự án', () => {
    cy.xpath(cauHinhProject.getBtnDelProjectOnPopup).click()
})

Then('Xóa dự án thành công, click Trờ về trang chủ button', () => {
    cy.xpath("//a[contains(text(),'Trở về trang chủ')]").click({force: true})
    cy.url().should('eq', 'https://my.bizfly.vn/')
})