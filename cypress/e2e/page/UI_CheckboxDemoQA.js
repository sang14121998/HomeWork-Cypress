const URL = "https://demoqa.com/checkbox";
const ALL_LIST = ".check-box-tree-wrapper";
const HOME_LIST_ARROW = ".rct-icon rct-icon-expand-open";
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
            cy.get(HOME_LIST_ARROW).should("be.enabled").click()
        
        )
    }
}