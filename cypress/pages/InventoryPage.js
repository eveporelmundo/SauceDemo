class InventoryPage {
verifyPageTitle() {
cy.get('[data-test="title"]').should('contain.text', 'Products')
}

addBackpackToCart() {
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
}

addBikeLightToCart() {
cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
}

removeBackpackFromCart() {
cy.get('[data-test="remove-sauce-labs-backpack"]').click()
}

verifyCartBadgeQuantity(quantity) {
cy.get('[data-test="shopping-cart-badge"]').should('contain.text', quantity)
}

verifyCartBadgeDoesNotExist() {
cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
}

openCart() {
cy.get('[data-test="shopping-cart-link"]').click()
}

openMenu() {
cy.get('#react-burger-menu-btn').click()
}

logout() {
this.openMenu()
cy.get('[data-test="logout-sidebar-link"]').click()
}
}

export default new InventoryPage()