describe('Login - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('TC 1 - Login exitoso con usuario estandar', () => {

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.url().should('include', '/inventory.html')
        cy.get('.app_logo').should('be.visible').and('contain', 'Swag Labs')
    })

})

