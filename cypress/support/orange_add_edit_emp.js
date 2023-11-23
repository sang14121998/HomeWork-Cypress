Cypress.Commands.add("inputData", function(elm, data) {
    cy.xpath(elm)
      .should("be.enabled")
      .clear()
      .type(data)
})

Cypress.Commands.add("verifiDataInputed", function(elm, dataInputed) {
    cy.xpath(elm)
    .should("be.enabled")
    .and("have.value", dataInputed)
       
})