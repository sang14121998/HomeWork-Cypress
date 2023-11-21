describe("Login and Edit info Account", () => {
    let fName = "Sang";
    let mName = "Tan";
    let lName = "Tran";
    it("TC1-edit info is successfully", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='username']").type("Admin");
        cy.xpath("//input[@placeholder='password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
        cy.xpath("//input[@placeholder='First name']").should("be.enabled").type(fName);
        cy.xpath("//input[@placeholder='Middle name']").should("be.enabled").type(mName);
        cy.xpath("//input[@placeholder='Last Name']").should("be.enabled").type(lName);
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").should("be.enabled").type("1412");
        cy.xpath("//button[normalize-space()='Save']").should("be.enabled").click();

        cy.url().should("include", "viewPersonalDetails/empNumber/");

        // check datat inputed
        cy.xpath("//input[@placeholder='First name']").should("be.enabled").and("have.value", fName);
        cy.xpath("//input[@placeholder='Middle name']").should("be.enabled").and("have.value", mName);
        cy.xpath("//input[@placeholder='Last Name']").should("be.enabled").and("have.value", lName);

    })
})