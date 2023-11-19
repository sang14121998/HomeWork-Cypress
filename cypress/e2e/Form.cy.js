describe("Test form", ()=> {
    // Import date-fns
    const { format } = require('date-fns');
    // Lấy giờ hiện tại
    const currentDate = new Date();
  
    // it("TC1 - submit form - verify required input", () =>{
    //     cy.visit("https://demoqa.com/automation-practice-form");
    //     cy.xpath("//input[@id='firstName']").should("be.enabled").type("Alice");
    //     cy.xpath("//input[@id='lastName']").should("be.enabled").type("Pham");
    //     cy.xpath("//label[normalize-space()='Male']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Female']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Other']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Female']").click();
    //     cy.xpath("//input[@id='userNumber']").should("be.enabled").type("0123456789");         
    //     cy.xpath("//button[@id='submit']").should("be.enabled").click({force: true});

    //     // check visible popup
    //     cy.xpath("(//div[@class='modal-header'])[1]").should("be.visible");

    //     // check value of table 
    //     cy.get("tbody tr:nth-child(1) td:nth-child(2)").should("have.text", "Alice Pham");
    //     cy.get("tbody tr:nth-child(2) td:nth-child(2)").should("have.text", "");
    //     cy.get("tbody tr:nth-child(3) td:nth-child(2)").should("have.text", "Female");
    //     cy.get("tbody tr:nth-child(4) td:nth-child(2)").should("have.text","0123456789");

    //     // Định dạng thời gian với DD Month YYYY
    //     const formattedDate = format(currentDate, 'dd MMMM,yyyy');
    //     // Kiểm tra nội dung hiển thị trong phần tử   
    //     cy.get("tbody tr:nth-child(5) td:nth-child(2)").should("have.text", formattedDate);

    //     cy.get("tbody tr:nth-child(6) td:nth-child(2)").should("have.text", "");
    //     cy.get("tbody tr:nth-child(7) td:nth-child(2)").should("have.text", "");
    //     cy.get("tbody tr:nth-child(8) td:nth-child(2)").should("have.text", "");
    //     cy.get("tbody tr:nth-child(9) td:nth-child(2)").should("have.text", "");
    //     cy.get("tbody tr:nth-child(10) td:nth-child(2)").should("have.text", "");

    //     cy.get("#closeLargeModal").should("be.enabled").click({force: true});
    //     cy.xpath("(//div[@class='modal-header'])[1]").should("not.exist");
    // })
    
    // it("TC2 -Check data of all file after close popup", () => {
    //     cy.visit("https://demoqa.com/automation-practice-form");
    //     cy.xpath("//input[@id='firstName']").should("be.enabled").type("Alice");
    //     cy.xpath("//input[@id='lastName']").should("be.enabled").type("Pham");
    //     cy.xpath("//label[normalize-space()='Male']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Female']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Other']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Female']").click();
    //     cy.xpath("//input[@id='userNumber']").should("be.enabled").type("0123456789");         
    //     cy.xpath("//button[@id='submit']").should("be.enabled").click({force: true});

    //     cy.get("#closeLargeModal").should("be.enabled").click({force: true});
    //     cy.xpath("(//div[@class='modal-header'])[1]").should("not.exist");

    //     cy.xpath("//input[@id='firstName']").should("have.text", "");
    //     cy.xpath("//input[@id='lastName']").should("have.text", "");
    //     cy.xpath("//input[@id='userEmail']").should("have.text", "");
    //     cy.xpath("//label[normalize-space()='Male']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Female']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Other']").should("not.be.checked");
    //     cy.xpath("//input[@id='userNumber']").should("not.be.checked");
    //     cy.xpath("//input[@id='firstName']").should("have.text", "");
    //     cy.xpath("//input[@id='firstName']").should("have.text", "");

    //     // Định dạng thời gian với DD MMM YYYY
    //     const formattedDate = format(currentDate, 'dd MMM yyyy');
    //     // Kiểm tra nội dung hiển thị trong phần tử   
    //     cy.xpath("//input[@id='dateOfBirthInput']").should("have.value", formattedDate);

    //     cy.xpath("//div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']")
    //        .should("have.text", "");
    //     cy.xpath("//label[normalize-space()='Sports']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Reading']").should("not.be.checked");
    //     cy.xpath("//label[normalize-space()='Music']").should("not.be.checked");
    //     cy.get("#uploadPicture").should("be.enabled").and("have.value", "");
    //     cy.get("#currentAddress").should("have.text", "");
    //     cy.xpath("//div[@id='state']//div[contains(@class,'css-1hwfws3')]").should('not.be.disabled').and("have.value", "");
    //     cy.get("#city").should("not.be.enabled").and("have.value", "");
    //     cy.xpath("//button[@id='submit']").should("be.enabled");
    // })
    /////////////////////////////////////////////////////////////////////////
    it("TC3 - Submit is successfully with input all file", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.xpath("//input[@id='firstName']").should("be.enabled").type("Alice");
        cy.xpath("//input[@id='lastName']").should("be.enabled").type("Pham");
        cy.xpath("//input[@id='userEmail']").should("be.enabled").type("trantansang@gmail.com");
        cy.xpath("//label[normalize-space()='Female']").should("not.be.checked").click({force: true});
        cy.xpath("//input[@id='userNumber']").should("be.enabled").type("0123456789"); 

        const formattedDate = format(currentDate, 'dd MMM yyyy');       
        cy.get("#dateOfBirthInput").should("have.value", formattedDate).and("be.enabled").click();
        


        cy.xpath("//select[@class='react-datepicker__month-select']").should("be.enabled").select(11);
        cy.xpath("//select[@class='react-datepicker__year-select']").should("be.enabled").select(1998);
        cy.xpath("//div[@aria-label='Choose Monday, December 14th, 1998']").click({force: true});



        


        //cy.xpath("//button[@id='submit']").should("be.enabled").click({force: true});

    })
    
})