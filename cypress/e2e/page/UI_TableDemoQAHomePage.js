const URL = "https://demoqa.com/webtables";
const TABLE = ".rt-table";
const CELL = ".rt-td";
const ROW = ".rt-tr-group";
const BTN_EDIT = 'span[id= "edit-record-2"]';
const BTN_DEL = "#delete-record-2";
const BTN_ADD = "#addNewRecordButton";
const SEACRH_BOX = "#searchBox";


export default class TableDemoQAHomePage {
    get getUrl() {
        return URL;
    }

    get getTable() {
        return TABLE;
    }

    get getCell() {
        return CELL;
    }

    get getRow() {
        return ROW;
    }

    get getBtnEditClick() {
        return (
            cy.get(BTN_EDIT).should("be.enabled").click()
        )
    }

    get getBtnDelClick() {
        return (
            cy.get(BTN_DEL).should("be.enabled").click()
        );
    }
    
    get getBtnAddClick() {
        return (
            cy.get(BTN_ADD).should("be.enabled").click()
        )
    }

    get getSearchBox() {
        return SEACRH_BOX;
    }




 }