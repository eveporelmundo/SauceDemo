class CheckoutPage {
fillFirstName(firstName) {
cy.get('[data-test="firstName"]').clear().type(firstName)
}

fillLastName(lastName) {
cy.get('[data-test="lastName"]').clear().type(lastName)
}

fillPostalCode(postalCode) {
cy.get('[data-test="postalCode"]').clear().type(postalCode)
}

fillCheckoutForm(firstName, lastName, postalCode) {
this.fillFirstName(firstName)
this.fillLastName(lastName)
this.fillPostalCode(postalCode)
}

continueCheckout() {
cy.get('[data-test="continue"]').click()
}

finishCheckout() {
cy.get('[data-test="finish"]').click()
}

verifyErrorMessage(message) {
cy.get('[data-test="error"]').should('contain.text', message)
}

verifyOverviewPage() {
cy.get('[data-test="title"]').should('contain.text', 'Checkout: Overview')
}

verifyOrderComplete() {
cy.get('[data-test="complete-header"]').should('contain.text', 'Thank you for your order!')
}
}

export default new CheckoutPage()