import TableDemoQA from "../page/UI_TableDemoQAHomePage";
import PopupTable from "../page/UI_PopupFormWebTable";
import DataPopupTable from "../../fixtures/DataPopupTableDemoQA.json";
import CheckboxDemoQA from "../page/UI_CheckboxDemoQA"


const tableDemoQA = new TableDemoQA();
const popupTable = new PopupTable();
const checkboxDemoQA = new CheckboxDemoQA();


describe("Test web table DemoQA", () => {
    // it("TC1- Create new info of an emp and search it", () => {
    //     // add new an emp
    //     cy.visit(tableDemoQA.getUrl);
    //     tableDemoQA.getBtnAddClick;
    //     popupTable.getPopupCheckVisible;
    //     cy.inputPopupTable(popupTable.getFirstName, DataPopupTable.createInfo.firstName);
    //     cy.inputPopupTable(popupTable.getLastName, DataPopupTable.createInfo.lastName);
    //     cy.inputPopupTable(popupTable.getAge, DataPopupTable.createInfo.age);
    //     cy.inputPopupTable(popupTable.getEmail, DataPopupTable.createInfo.email);
    //     cy.inputPopupTable(popupTable.getSalary, DataPopupTable.createInfo.salary);
    //     cy.inputPopupTable(popupTable.getDepartment, DataPopupTable.createInfo.department);
    //     popupTable.getBtnSubmitClick;
    //     popupTable.getPopupCheckNotExist;

    //     // search info of an emp has just added
    //     cy.get(tableDemoQA.getSearchBox).type(DataPopupTable.createInfo.email);
    //     cy.get(tableDemoQA.getTable)
    //        .find(tableDemoQA.getRow)
    //        .each(($row) => {                
    //             cy.wrap($row)
    //             .find(tableDemoQA.getCell)
    //             .eq(3)
    //             .should("have.text", DataPopupTable.createInfo.email)
    //             return false;
                
    //     })
    // })

    it("TC2-Select 'Word file.doc' checkbox", () => {
        checkboxDemoQA.getURL;
        checkboxDemoQA.getAllListExist;
        checkboxDemoQA.getHomeListClick;
        checkboxDemoQA.getDownloadListClick;
        checkboxDemoQA.getCheckboxWordFileClick;

        

    })
})
