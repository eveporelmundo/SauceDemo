class CartPage {
verifyCartPage() {
cy.get('[data-test="title"]').should('contain.text', 'Your Cart')
}

verifyProductInCart(productName) {
cy.get('[data-test="inventory-item-name"]').should('contain.text', productName)
}

removeBackpackFromCart() {
cy.get('[data-test="remove-sauce-labs-backpack"]').click()
}

verifyCartIsEmpty() {
cy.get('[data-test="inventory-item"]').should('not.exist')
}

continueShopping() {
cy.get('[data-test="continue-shopping"]').click()
}

goToCheckout() {
cy.get('[data-test="checkout"]').click()
}
}

export default new CartPage()