class LoginPage {
visit() {
    cy.visit('https://www.saucedemo.com/')
}

enterUsername(username) {
    cy.get('[data-test="username"]').clear().type(username)
}

enterPassword(password) {
    cy.get('[data-test="password"]').clear().type(password)
}

clickLogin() {
    cy.get('[data-test="login-button"]').click()
}

login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
}

verifyErrorMessage(message) {
    cy.get('[data-test="error"]').should('contain.text', message)
}
}

export default new LoginPage()