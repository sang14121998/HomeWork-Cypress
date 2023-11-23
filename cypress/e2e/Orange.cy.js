describe("Login and Edit info Account", () => {
    let fName = "Sang";
    let mName = "Tan";
    let lName = "Tran";
    let idName = 3123;
    let fNameEdit = "John";
    let mNameEdit= "Wick";
    let lNameEdit = "Parker";
    let idNameEdit = 204212;
    let nickName = "SangTT";
    let otherId = 444;


    it("TC1-edit info is successfully", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").type("Admin");
        cy.xpath("//input[@placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
        cy.xpath("//input[@placeholder='First Name']").should("be.enabled").type(fName);
        cy.get("input[placeholder='Middle Name']").should("be.enabled").type(mName);
        cy.xpath("//input[@placeholder='Last Name']").should("be.enabled").type(lName);
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").should("be.enabled").clear().type(idName);
        cy.xpath("//button[normalize-space()='Save']").should("be.enabled").click();

        cy.url().should("include", "viewPersonalDetails/empNumber/");

        // check data inputed
        cy.xpath("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[1]").should("exist");
        cy.xpath("//input[@placeholder='First Name']").should("be.enabled").and("have.value", fName);
        cy.xpath("//input[@placeholder='Middle Name']").should("be.enabled").and("have.value", mName);
        cy.xpath("//input[@placeholder='Last Name']").should("be.enabled").and("have.value", lName);
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]").should("be.enabled").and("have.value", idName);
   
        // update info 
        cy.xpath("//input[@placeholder='First Name']").clear().type(fNameEdit);
        cy.xpath("//input[@placeholder='Middle Name']").clear().type(mNameEdit);
        cy.xpath("//input[@placeholder='Last Name']").clear().type(lNameEdit);
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[1]").should("be.enabled").clear().type(nickName);       
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]").clear().type(idNameEdit);
        cy.xpath("(//input)[7]").should("be.enabled").clear().type(otherId); 
        cy.xpath("(//input[@placeholder='yyyy-mm-dd'])[1]").should("be.enabled").clear().type("2030-12-25").click();
        cy.xpath("(//button[@type='submit'][normalize-space()='Save'])[1]").should("be.enabled").click();
        cy.url().should("include", "viewPersonalDetails/empNumber/");

        // check data after update
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
       cy.contains(idNameEdit).should("exist");










    })
})