import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'

describe('Inventory tests - SauceDemo', () => {
beforeEach(() => {
loginPage.visit()
loginPage.login('standard_user', 'secret_sauce')
})

it('should display the products page after login', () => {
inventoryPage.verifyPageTitle()
})

it('should add one product to the cart', () => {
inventoryPage.addBackpackToCart()
inventoryPage.verifyCartBadgeQuantity('1')
})

it('should add two products to the cart', () => {
inventoryPage.addBackpackToCart()
inventoryPage.addBikeLightToCart()
inventoryPage.verifyCartBadgeQuantity('2')
})

it('should remove a product from the cart', () => {
inventoryPage.addBackpackToCart()
inventoryPage.verifyCartBadgeQuantity('1')

inventoryPage.removeBackpackFromCart()
inventoryPage.verifyCartBadgeDoesNotExist()
})

it('should logout successfully', () => {
inventoryPage.logout()

cy.url().should('eq', 'https://www.saucedemo.com/')
cy.get('[data-test="login-button"]').should('be.visible')
})
})