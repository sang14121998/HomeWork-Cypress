describe("Test SQL", () => {
    it('TC1', () => {
        const sql = "select * from students";
        cy.query(sql).then(res => {
            //cy.log(res); 
            res.forEach(student => {
                cy.log(student.name + " class: " + student.class)
                
            });           
               
            });          
        })

    // it('TC2', () => {
    //     const sql = 'UPDATE sql12675950.students SET sql12675950.students.name = "SangEdit1412" WHERE sql12675950.students.name = "SangEdit" '
    //     cy.query(sql).then(res => {
    //         cy.log(res);
    //         expect(res.affectedRows).to.equal(1);
    //     })
    // })
    
    it('TC3', () => {
        const sql = 'INSERT INTO sql12675950.students VALUES (155 , "NAM1 ", 91, "Ea", 77177) '
        cy.query(sql).then(res => {
            cy.log(res);
            expect(res.affectedRows).to.equal(1);
        })
        
    })

    
    
})
