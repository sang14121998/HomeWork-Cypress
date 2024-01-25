describe('Scroll', () => {
    it('TC1 scroll', () => {
        cy.visit('https://vinid.net/');
        // cy.wait(3000);

        // cy.scrollTo(0, 500);
        // cy.wait(2000);

        //  Cuộn xuống cuối trang trong 2s
        // cy.wait(2000);
        // cy.scrollTo('bottom');

        // // Cuộn len dau trang trong 2s
        // cy.wait(2000);
        // cy.scrollTo('top');

        // // Cuộn đến phần tử 
        cy.viewport('iPhone 14 Pro Max');
        cy.wait(2000);
        cy.xpath('(//span[@class="cta-title"][normalize-space()="Khám phá thêm"])[1]').scrollIntoView();
    })
})