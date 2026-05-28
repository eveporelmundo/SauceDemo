describe('Check out - SauceDemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html') 

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click()

        cy.get('[data-test="shopping-cart-link"]')
        .click()
    })

    it('TC 13 - Procedes con el check out de un producto', () =>{
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Juan')
        cy.get('[data-test="lastName"]').type('Perez')
        cy.get('[data-test="postalCode"]').type('5000')

        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()

        cy.url().should ('include', '/checkout-complete.html')

        cy.get('[data-test="complete-header"]')
        .should('be.visible')
        .and('contain', 'Thank you for your order!')
    })

    it('TC 14 - Check out con campos vacios', ()=>{
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Error: First Name is required')

    })

})