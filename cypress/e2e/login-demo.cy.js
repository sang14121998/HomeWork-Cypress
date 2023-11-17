describe("login", () => {
    it("TC1 - register get element by CSS ID selector" , () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").should("be.enabled").type("trantansang");
        //cy.get("#userName").type("Tran Tan Sang");

        cy.get("#userEmail").should("be.enabled").type("trantansang1412@gmail.com");
        cy.get("#currentAddress").should("be.enabled").type("Ha Noi city");
        cy.get("#permanentAddress").should("be.enabled").type("Nam Dinh city");
        cy.get("#submit").click();
        ////
        // cy.get("#userName")
        //   .invoke("val")
        //   .then(val => {
        //     console.log("value email: ", val )
        //     expect(val).equal("trantansang") 
        // });
        

        // kiem tra so sanh ket qua nhap co dung khong
        cy.get("#userName").should("have.value", "trantansang");
        

        cy.get("#userEmail")
          .invoke("val")
          .then(val => {
            console.log("value email: ", val )
            expect(val).equal("trantansang1412@gmail.com") 
        });

        cy.get("#currentAddress")
          .invoke("val")
          .then(val => {
            console.log("value email: ", val )
            expect(val).equal("Ha Noi city") 
        });

        cy.get("#permanentAddress")
          .invoke("val")
          .then(val => {
            console.log("value email: ", val )
            expect(val).equal("Nam Dinh city") 
        });

        // check value after subit
           // check hien thi
        cy.get("#name").should("be.visible").and("include.text", "trantansang");
        cy.get("#email").should("be.visible").and("include.text", "trantansang1412@gmail.com");
        cy.xpath("//p[@id='currentAddress']").should("be.visible").and("include.text", "Ha Noi city");
        cy.xpath("//p[@id='permanentAddress']").should("be.visible").and("include.text", "Nam Dinh city");
    
    })

    // it ("TC2 - register get element by Relative Xpath", () => {
    //     cy.visit("https://demoqa.com/text-box");
    //     cy.xpath("//input[@id='userName']").type("Tran Tan Sang");
    //     cy.xpath("//input[@id='userEmail']").type("trantansang1412@gmail.com");
    //     cy.xpath("//textarea[@id='currentAddress']").type("Ha Noi 01 city");
    //     cy.xpath("//textarea[@id='permanentAddress']").type("Nam Dinh 01 city");
    //     cy.xpath("//button[@id='submit']").click();

    // })

    // it ("TC3 - view detail a Macbook and buy MacBook - by Rel Xpath", () => {
    //     cy.visit("https://demo.opencart.com/index.php?route=common/home&language=en-gb");       
    //     cy.xpath("//img[@title='MacBook']").click();       
    //     cy.visit("https://demo.opencart.com/index.php?route=product/product&language=en-gb&product_id=43");       
    //     cy.xpath("//input[@id='input-quantity']").clear();       
    //     cy.xpath("//input[@id='input-quantity']").type("123");      
    //     cy.xpath("//button[@id='button-cart']").click();

    // })
})

