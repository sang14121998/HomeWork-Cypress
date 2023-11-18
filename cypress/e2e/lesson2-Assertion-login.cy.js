describe("Login", () => {
    it("TC1 - Login is successfully", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("be.enabled").type("admin");
        cy.xpath("//input[@placeholder='Password']").should("be.enabled").type("admin123");
        cy.xpath("//button[normalize-space()='Login']").should("be.enabled").click();
        cy.contains("Time at Work")
    })

    it("TC2 - Login Fail - Username is incorret", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("be.enabled").type("SangTT");
        cy.xpath("//input[@placeholder='Password']").should("be.enabled").type("admin123");
        cy.xpath("//button[normalize-space()='Login']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("have.value", "");
        cy.xpath("//input[@placeholder='Password']").should("have.value", "");
        cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible").and("have.text", "Invalid credentials");

    })

    it("TC3 - Login Fail - Password is incorret", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("be.enabled").type("Admin");
        cy.xpath("//input[@placeholder='Password']").should("be.enabled").type("123456");
        cy.xpath("//button[normalize-space()='Login']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("have.value", "");
        cy.xpath("//input[@placeholder='Password']").should("have.value", "");
        cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible").and("have.text", "Invalid credentials");

    })
    
    it("TC4 - Login Fail -Password is blank", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("be.enabled").type("Admin");
        cy.xpath("//button[normalize-space()='Login']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("have.value", "Admin");
        cy.xpath("//input[@placeholder='Password']").should("have.value", "");
        cy.get(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message").should("be.visible").and("have.text", "Required");
    })

    it("TC5 - Login Fail -Username is blank", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Password']").should("be.enabled").type("123456");
        cy.xpath("//button[normalize-space()='Login']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("have.value", "");
        cy.xpath("//input[@placeholder='Password']").should("have.value", "123456");
        cy.get(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message").should("be.visible")
          .and("have.text", "Required");
    })

    it("TC6 - Login Fail -Username and pass are blank", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");       
        cy.xpath("//button[normalize-space()='Login']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("have.value", "");
        cy.xpath("//input[@placeholder='Password']").should("have.value", "");
        cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'][normalize-space()='Required'])[1]")
          .should("be.visible")
          .and("have.text", "Required");
        cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'][normalize-space()='Required'])[2]").should("be.visible").and("have.text", "Required");
    })

    

})