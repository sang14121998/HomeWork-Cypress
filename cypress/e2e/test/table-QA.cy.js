import TableDemoQA from "../page/TableDemoQA"

const tableDemoQA = new TableDemoQA();
describe("Test Table DemoQA", ()=> {
    // it("TC1-Find element of table", ()=>{
    //     let cellIndex = 1;
    //     let rowIndex = 1;

    //     cy.visit(tableDemoQA.getUrl);
    //     cy.get(tableDemoQA.getRow)
    //       .eq(rowIndex)
    //       .find(tableDemoQA.getCell)
    //       .eq(cellIndex)
    //       .should('have.text', "Cantrell")
          

    // })

    it("TC1-Find element of table", ()=>{
        cy.visit(tableDemoQA.getUrl);
        cy.get(tableDemoQA.getRow)
          .eq(1)
          .find(tableDemoQA.getCell)
          .eq(6)
          .find(tableDemoQA.getBtnEdit)
          .click()
       
    })
})