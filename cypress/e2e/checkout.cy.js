import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'
import checkoutPage from '../pages/CheckoutPage'

describe('Checkout tests - SauceDemo', () => {
beforeEach(() => {
loginPage.visit()
loginPage.login('standard_user', 'secret_sauce')
inventoryPage.addBackpackToCart()
inventoryPage.openCart()
cartPage.goToCheckout()
})

it('should complete checkout successfully', () => {
checkoutPage.fillCheckoutForm('Evelyn', 'Grau', '1000')
checkoutPage.continueCheckout()

checkoutPage.verifyOverviewPage()
checkoutPage.finishCheckout()

checkoutPage.verifyOrderComplete()
})

it('should show error when first name is missing', () => {
checkoutPage.continueCheckout()

checkoutPage.verifyErrorMessage('First Name is required')
})

it('should show error when last name is missing', () => {
checkoutPage.fillFirstName('Evelyn')
checkoutPage.continueCheckout()

checkoutPage.verifyErrorMessage('Last Name is required')
})

it('should show error when postal code is missing', () => {
checkoutPage.fillFirstName('Evelyn')
checkoutPage.fillLastName('Grau')
checkoutPage.continueCheckout()

checkoutPage.verifyErrorMessage('Postal Code is required')
})
})