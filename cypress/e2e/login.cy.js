import loginPage from '../pages/LoginPage'


describe('Login tests - SauceDemo', () => {
beforeEach(() => {
loginPage.visit()
})

it('should login successfully with valid credentials', () => {
loginPage.login('standard_user', 'secret_sauce')

cy.url().should('include', '/inventory.html')
cy.get('[data-test="title"]').should('contain.text', 'Products')
})

it('should show an error with invalid credentials', () => {
loginPage.login('invalid_user', 'wrong_password')

loginPage.verifyErrorMessage('Username and password do not match')
})

it('should show an error for locked out user', () => {
loginPage.login('locked_out_user', 'secret_sauce')

loginPage.verifyErrorMessage('Sorry, this user has been locked out')
})
})