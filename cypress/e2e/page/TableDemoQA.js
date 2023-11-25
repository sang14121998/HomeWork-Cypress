const URL = "https://demoqa.com/webtables";
const TABLE = "//div[@role='grid']";
const CELL = ".rt-td";
const ROW = ".rt-tr-group";
const BTN_EDIT = 'span[id= "edit-record-2"]';
const BTN_DEL = "#delete-record-2";
const BTN_SUBMIT = "#submit";



export default class TableDemoQA {
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

    get getBtnEdit() {
        return BTN_EDIT;
    }

    get getBtnDel() {
        return BTN_DEL;
    }



 }