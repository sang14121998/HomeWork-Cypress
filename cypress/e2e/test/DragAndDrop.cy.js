describe('Drag and Drop', () => {
    it('TC1', () => {
        cy.visit('https://demoqa.com/droppable');
        cy.get('#draggable').as('source'); // gan element cho 1 bien
        cy.xpath('(//div[@id="droppable"])[1]').as('target'); // gan element cho 1 bien
        
        cy.get('@source').trigger('mousedown', {which: 1});
        cy.get('@target').trigger('mousemove').trigger('mouse', {force: true});
        cy.wait(6000)
    })
})