
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

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