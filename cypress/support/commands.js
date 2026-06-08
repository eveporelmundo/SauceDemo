Cypress.Commands.add('login', (usuario, contrasenia) => {
    // Login 
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(contrasenia)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')

})

Cypress.Commands.add('irAlCarrito', () =>{

    cy.get('.shopping_cart_link').click()

})

Cypress.Commands.add('agregarAlCarrito',(producto)=>{
    
    cy.get('[data-test="add-to-cart-${producto}]').click()
})

Cypress.Commands.add('agregarAlCarrito',(producto)=>{
    cy.get(`[data-test="add-to-cart-${producto}"]`).click()
})

Cypress.Commands.add('confirmarPedido',()=>{
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
})