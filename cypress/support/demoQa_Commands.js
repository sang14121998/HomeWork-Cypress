

Cypress.Commands.add("inputText", function(elm, text) {
    cy.xpath(elm)
      .should("be.enabled")
      .should("be.visible")
      .clear()
      .type(text)
      .invoke("val")
      .then(function(val) {
        expect(val).to.eq(text);
      })
})

Cypress.Commands.add("checkGender", function(elm) {
    cy.xpath(elm)
      .and("not.be.checked")
      .click();

})