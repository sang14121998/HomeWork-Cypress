import DropdownProject from '../../page/DropdownpProjectMyBizFly'
import CreateProject  from '../../page/CreateNewProjectMyBiz'
import {Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor"

const dropdownProject = new DropdownProject();
const createNewProject = new CreateProject();

When ("Click dropdown Chọn dự án và click on Tạo dự án mới button", () => {
    
    cy.xpath(dropdownProject.getChooseProject).click();
    cy.xpath(dropdownProject.getBtnCreateProject).click();
})

Then ('Chọn giải pháp BizCRM', ()=> {
    cy.xpath(createNewProject.getBtnGiaiPhapBizCrm).click({force:true})
   
})

When ('Click on Bắt đầu sử dụng ngay button', ()=> {
     cy.xpath(createNewProject.getBtnStartNow).click({force:true})
})

Then ('Tạo dự án mới thành công đi kèm với giải pháp BizCRM đã chọn', () => {
    cy.url().should('include', 'https://my.bizfly.vn/du-an/tong-quan')
})

When('Đã tạo 1 project thành công', () => {
    cy.xpath(dropdownProject.getChooseProject).click()
    cy.xpath(dropdownProject.getBtnCreateProject).click()
    cy.xpath(createNewProject.getBtnGiaiPhapBizCrm).click({force:true})
    cy.xpath(createNewProject.getBtnStartNow).click({force:true})
    cy.visit('https://my.bizfly.vn/')

})