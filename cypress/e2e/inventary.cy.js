describe('Inventario - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
    })

    it('TC 6 - Verificar cantidad de productos en inventario', () => {

        cy.viewport(1366, 768)

        cy.get('.inventory_item').as('productos')

        cy.get('@productos')
        .should('have.length', 6)

    })

    it('TC 8 - Ordenar productos por precio menor a mayor', () => {

        cy.get('[data-test="product-sort-container"]')
        .select('lohi')

        cy.get('.inventory_item_price')
        .first()
        .should('contain', '$7.99')

        cy.get('.inventory_item_name')
        .first()
        .should('contain', 'Sauce Labs Onesie')

    })

})

