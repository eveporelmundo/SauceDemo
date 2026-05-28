describe('Carrito - SauceDemo', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')

    })

    it('TC 10 - Agregar un producto al carrito', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click()

        cy.get('.shopping_cart_badge')// se inpecciona el numero del carrito
        .should('be.visible')// y debe estar presente
        .and('have.text', '1')

        cy.get('[data-test="remove-sauce-labs-backpack"]')
        .should('contain', 'Remove')

    })

    it('TC 11 - Agregar 3 productos al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

        cy.get('.shopping_cart_badge')// se inpecciona el numero del carrito
        .should('be.visible')// y debe estar presente
        .and('have.text', '3')

        cy.get('[data-test="remove-sauce-labs-backpack"]')
        .should('contain', 'Remove')
        cy.get('[data-test="remove-sauce-labs-bike-light"]')
        .should('contain', 'Remove')// chequea que aparezca remove en el boton
        cy.get('[data-test="remove-sauce-labs-onesie"]')
        .should('contain', 'Remove')
    })

    it ('TC - Eliminar un producto del carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()


        cy.get('[data-test="shopping-cart-link"]')
        .click() 
        cy.url().should('include', '/cart.html')

        cy.get('[data-test="remove-sauce-labs-bike-light"]')
        .click() 

        cy.get('.shopping_cart_badge')// se inpecciona el numero del carrito
        .should('be.visible')// y debe estar presente
        .and('have.text', '2')
        

    })

})