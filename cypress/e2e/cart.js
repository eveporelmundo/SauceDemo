import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'

describe('Cart tests - SauceDemo', () => {
beforeEach(() => {
loginPage.visit()
loginPage.login('standard_user', 'secret_sauce')
})

it('should display product added to cart', () => {
inventoryPage.addBackpackToCart()
inventoryPage.openCart()

cartPage.verifyCartPage()
cartPage.verifyProductInCart('Sauce Labs Backpack')
})

it('should remove product from cart', () => {
inventoryPage.addBackpackToCart()
inventoryPage.openCart()

cartPage.removeBackpackFromCart()
cartPage.verifyCartIsEmpty()
})

it('should continue shopping from cart page', () => {
inventoryPage.addBackpackToCart()
inventoryPage.openCart()

cartPage.continueShopping()

cy.url().should('include', '/inventory.html')
inventoryPage.verifyPageTitle()
})

it('should go to checkout from cart page', () => {
inventoryPage.addBackpackToCart()
inventoryPage.openCart()

cartPage.goToCheckout()

cy.url().should('include', '/checkout-step-one.html')
cy.get('[data-test="title"]').should('contain.text', 'Checkout: Your Information')
})
})