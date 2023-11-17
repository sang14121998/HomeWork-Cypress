describe("login", () => {
    it("TC1 - register get element by CSS ID selector" , () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").should("be.enabled").type("trantansang");
        //cy.get("#userName").type("Tran Tan Sang");

        cy.get("#userEmail").should("be.enabled").type("trantansang1412@gmail.com");
        cy.get("#currentAddress").should("be.enabled").type("Ha Noi city");
        cy.get("#permanentAddress").should("be.enabled").type("Nam Dinh city");
        cy.get("#submit").click();
    })

    it ("TC2 - register get element by Relative Xpath", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.xpath("//input[@id='userName']").type("Tran Tan Sang");
        cy.xpath("//input[@id='userEmail']").type("trantansang1412@gmail.com");
        cy.xpath("//textarea[@id='currentAddress']").type("Ha Noi 01 city");
        cy.xpath("//textarea[@id='permanentAddress']").type("Nam Dinh 01 city");
        cy.xpath("//button[@id='submit']").click();

    })
})