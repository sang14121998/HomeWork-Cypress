const URL = "https://demoqa.com/checkbox";
const ALL_LIST = ".check-box-tree-wrapper";
const BTN_HOME_LIST = "(//button[@title='Toggle'])[1]";
const BTN_DOWNLOADS_LIST = "(//button[@title='Toggle'])[4]";
const CHECKBOX_HOME = "#tree-node-home";
const CHECKBOX_WORLD_FILE = "#tree-node-wordFile";
const STATUS_HALF_CHECK = ".rct-icon rct-icon-half-check";
const STATUS_CHECK_ALL = ".rct-icon rct-icon-check";
const STATUS_UNCHECK = ".rct-icon rct-icon-uncheck";
const DOWNLOADS_LIST ="#tree-node-downloads";
const WORD_FILE_DOC = "//span[contains(text(),'Word File.doc')]";

export default class CheckboxList {
    get getURL() {
        return (
            cy.visit(URL)
        )
    }

    get getAllListExist() {
        return (
            cy.get(ALL_LIST).should("exist")
        )
    }

    get getHomeListClick() {
        return (
            cy.xpath(BTN_HOME_LIST).should("be.enabled").click({force: true})
        
        )
    }

    get getDownloadListClick() {
        return (
            cy.xpath(BTN_DOWNLOADS_LIST).should("be.enabled").click({force: true})
        
        )
    }

    get getCheckboxHome() {
        return CHECKBOX_HOME;
    }

    get getCheckboxWordFileClick() {
        return (
            cy.get(CHECKBOX_WORLD_FILE)
              .should("be.enabled")
              .and("not.be.checked")
              .click({force: true})
        )
    }

    get getStatusHaftCheck() {
        return STATUS_HALF_CHECK;
    }


}