describe("Test hover", () => {
    it("TC1-hover to see tooltip", () => {        
        cy.visit("https://demoqa.com/tool-tips");
        cy.get("#toolTipButton").should("not.have.class", "btn btn-success");
        cy.get("#toolTipButton").trigger("mouseover");
        cy.get("#toolTipButton").should("have.class", "btn btn-success");
        // cy.get("#toolTipTextField").trigger("mouseover");
        // cy.get("#toolTipTextField").should("have.class", "hovered");
    })
})