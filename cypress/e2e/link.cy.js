describe("Test link", () => {
    it("TC1 - Click to direct new page" , () => {
        cy.visit("https://demoqa.com/links");
        cy.xpath("//a[@id='simpleLink']").click();
    })

    it("TC2 - Check attribute of link" , () => {
        cy.visit("https://demoqa.com/links");
        cy.xpath("//a[@id='simpleLink']").should("have.attr", "href", "https://demoqa.com" );
    })

    it("TC3 - Check text of hyperlink" , () => {
        cy.visit("https://demoqa.com/links");
        cy.xpath("//a[@id='simpleLink']").should("have.text", "Home" );
    })

    it("TC4 - Check target blank " , () => {
        cy.visit("https://demoqa.com/links");
        cy.xpath("//a[@id='simpleLink']").should("have.attr", "target", "_blank" );
    })
    
    it("TC5 - Remove target blank " , () => {
        cy.visit("https://demoqa.com/links");
        cy.xpath("//a[@id='simpleLink']").invoke("removeAttr", "target").click();
    })
    
    it("TC6 - Check CSS color" , () => {
        cy.visit("https://demoqa.com/links");
        cy.xpath("//a[@id='simpleLink']").should("have.css", "color", "rgb(0, 123, 255)");
    })

    it("TC7 - get value of attr" , () => {
        cy.visit("https://demoqa.com/links");
        cy.xpath("//a[@id='simpleLink']").invoke("attr", "href").should("include", "demo");
    })






})