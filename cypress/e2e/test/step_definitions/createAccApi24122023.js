import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";


// Create new acc
Given('Truy cập web và tạo 1 acc với username {string} và password {string}', function(username, password) {
    cy.request({
        method: 'POST' ,
        url: 'https://demoqa.com/Account/v1/User',
        header: {
            'Content-Type': 'application/json',
        },
        body: {
            userName: username,
            password: password

        }
    }).then((respone) => {
        expect(respone.status).to.eq(201),
        cy.wrap(respone.body).should('deep.include', {
            username: username

        });
        let data = {
            "username" : username,
            "password" : password,
            "userID" : respone.body.userID
        }
        cy.writeFile('cypress/fixtures/dataLogin24122023.json', data)
    })

})

// Gen token
When('Create token với acc vừa tạo', () => {
    cy.readFile('cypress/fixtures/dataLogin24122023.json').then(DataLogin  => {
        
        cy.request({
            method: 'POST' ,
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            header: {
                'Content-Type': 'application/json',
            },
            body: {
                userName: DataLogin.username,
                password: DataLogin.password
    
            }
        }).then((respone) => {
            expect(respone.status).to.eq(200),
            DataLogin.token = respone.body.token;
            DataLogin.exTime = respone.body.expires;
            cy.writeFile('cypress/fixtures/dataLogin24122023.json', DataLogin)
            
        cy.clearAllCookies();
        cy.log('debug: ',respone.body.expires);
        cy.setCookie('userName', DataLogin.username, {domain : 'demoqa.com'});
        cy.setCookie('userID', DataLogin.userID, {domain : 'demoqa.com'} );
        cy.setCookie('expires',respone.body.expires, {domain : 'demoqa.com'});
        cy.setCookie('token', DataLogin.token, {domain : 'demoqa.com'})
        cy.visit('https://demoqa.com/profile');

        window.localStorage.setItem('sangtt', '123');
       
        if(window.localStorage.getItem('sangtt == 123'))
        {
            cy.log('sangtt')
        }
        window.localStorage.getItem('totalCalls');
        window.localStorage.removeItem('_mgSessionId');
        
      
        }
        ) 
        //cy.getCookie('cookiName').then(cookie)

        

        
    }
    )
})