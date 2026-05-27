
//describe - grupo de pruebas
// before each - se ejecuta antes de cada test
// cy.visit - abre la pagina

describe('Login - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('TC 1 - Login exitoso con usuario estandar', () => {

        cy.get('[data-test="username"]').type('standard_user') //tipea el usuario
        cy.get('[data-test="password"]').type('secret_sauce')//cy.get() selecciona elementos del DOM
        cy.get('[data-test=login-button]').click()// clickea en el boton
        cy.url().should('include', '/inventory.html')// Confirma que te redirigió al inventario.
        cy.get('.app_logo').should('be.visible').and('contain', 'Swag Labs')// Confirma que el header aparece correctamente.
    })

    it('TC 2 - Login con contrasenia incorrecta', () => {

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('1234567')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Epic sadface: Username and password do not match any user in this service')

        cy.url().should('not.include', '/inventory.html')//que no llegue al inventory
    })

    it('TC 3 - Login con campos vacíos', () => {
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username is required')// que contenga el mensaje de error tal

        cy.url().should('not.include', '/inventory.html')
    })

    it('TC 4 - Login con usuario bloqueado', () =>{
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Sorry, this user has been locked out.')

        cy.url().should('not.include', '/inventory.html')

    })

})

