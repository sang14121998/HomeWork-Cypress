describe('Tooltip', () => {
    it('TC1 tooltip', () => {
        cy.visit('https://demoqa.com/tool-tips');
        cy.get('#toolTipButton').trigger('mouseover');
        cy.get('.tooltip').should('be.visible').contains('You hovered');
    })
})