describe("Test slider", () => {
    it("TC1 - set a value", () => {
        cy.visit("https://vnexpress.net/");
        cy.xpath("//button[@id='buttonSearchHeader']//*[name()='svg']").click();
        cy.get("#keywordHeader").invoke("removeAttr", "target");
        cy.get("#keywordHeader").type("SangTT");
        cy.get("#keywordHeader").type("{enter}");
        

    })
})