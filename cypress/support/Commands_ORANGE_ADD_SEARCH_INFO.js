Cypress.Commands.add("verifiURL", function(data) {
    cy.url().should("contain", data)
})

Cypress.Commands.add("verifiDataInputedXpath", function(elm, data) {
    cy.xpath(elm).should("be.enabled")
    .and("have.value", data)
})

Cypress.Commands.add("verifiDataInputedCSS", function(elm, data) {
    cy.get(elm).should("be.enabled")
    .and("have.value", data)
})