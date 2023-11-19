describe ("test dropDown", () => {
    it("TC1 - Check enable", () => {
        cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
        cy.xpath("//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//p//select")
           .should("be.enabled");
        cy.xpath("//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//p//select")
           .should("have.value", "AFG");
    })

    it("TC2 - Select option value and check value display", () => {
        cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
        cy.xpath("//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//p//select")
           .should("be.enabled");
        cy.xpath("(//select)[1]").select("VNM").contains("Viet Nam"); 
        // select index or value is valid !!!                    
    })

    it("TC3 - Get all value dropDown", () => {
        cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
        cy.xpath("(//select)[1]").find("option").each(($option) => {
            const optionText = $option.text().trim();
            cy.log(`Giá trị tùy chọn: ${optionText}`);
        })
                     
    })

    it("TC4 - Check random value of dropDowwn", () => {
        cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
        cy.xpath("(//select)[1]").contains("Viet Nam");                             
    })

       
})