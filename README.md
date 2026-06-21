![SauceDemo Cypress Test Suite Banner](./docs/iaautomationcypress.png)
# SauceDemo Cypress Test Suite

## Project Overview

This project is an end-to-end test automation suite built with **Cypress** for the demo e-commerce website [SauceDemo](https://www.saucedemo.com/).

The goal of this project is to demonstrate how a QA process can move from functional analysis to automated test execution, covering the most critical user flows of an online shopping application.

This repository is part of my QA Automation portfolio and focuses on practical testing skills such as functional testing, negative testing, bug prevention, maintainable test structure and automation using Cypress.

---

## QA Objective

The objective of this project is to validate the main functionalities of a demo e-commerce platform, including:

* User login
* Product inventory
* Shopping cart
* Checkout process
* Form validations
* Logout flow
* Negative scenarios

The test suite covers both happy paths and critical failure scenarios that could affect the user experience or the purchase flow.

---

## Application Under Test

**Website:** SauceDemo
**URL:** https://www.saucedemo.com/
**Type:** Demo e-commerce application
**Main flow:** Login → Product selection → Cart → Checkout → Order confirmation

---

## Tools and Technologies

* Cypress
* JavaScript
* Node.js
* Git
* GitHub
* Page Object Model

---

## Test Scope

### Included in scope

The automated tests cover the following areas:

* Login with valid credentials
* Login with invalid credentials
* Login with locked out user
* Product page validation
* Add product to cart
* Add multiple products to cart
* Remove product from cart
* Cart badge validation
* Cart page validation
* Continue shopping from cart
* Go to checkout from cart
* Checkout form validation
* Complete checkout flow
* Logout flow

### Out of scope for this version

The following areas are not covered in the current version:

* API testing
* Performance testing
* Visual regression testing
* Accessibility testing
* Cross-browser testing
* Mochawesome reports
* GitHub Actions CI pipeline

---

## Test Scenarios Automated

| ID     | Test Scenario                      | Priority | Type     |
| ------ | ---------------------------------- | -------- | -------- |
| TC-001 | Login with valid credentials       | High     | Positive |
| TC-002 | Login with invalid credentials     | High     | Negative |
| TC-003 | Login with locked out user         | High     | Negative |
| TC-004 | Validate product inventory page    | High     | Positive |
| TC-005 | Add one product to the cart        | High     | Positive |
| TC-006 | Add two products to the cart       | High     | Positive |
| TC-007 | Remove one product from the cart   | Medium   | Positive |
| TC-008 | Validate cart badge quantity       | High     | Positive |
| TC-009 | Validate product added to cart     | High     | Positive |
| TC-010 | Remove product from cart page      | Medium   | Positive |
| TC-011 | Continue shopping from cart        | Medium   | Positive |
| TC-012 | Navigate from cart to checkout     | High     | Positive |
| TC-013 | Complete checkout with valid data  | High     | Positive |
| TC-014 | Validate missing first name error  | High     | Negative |
| TC-015 | Validate missing last name error   | High     | Negative |
| TC-016 | Validate missing postal code error | High     | Negative |
| TC-017 | Logout successfully                | Medium   | Positive |

---

## Risk-Based Testing Approach

The test cases were prioritized based on the impact each functionality has on the user journey and business flow.

The highest priority was assigned to:

1. **Login**, because users cannot access the application without authentication.
2. **Inventory and cart**, because they directly affect the shopping experience.
3. **Checkout**, because it represents the final conversion step.
4. **Form validations**, because missing or incorrect validation can create incomplete orders or poor user experience.

---

## Project Structure

```bash
saucedemo-cypress-tests/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── inventory.cy.js
│   │   ├── cart.cy.js
│   │   └── checkout.cy.js
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Page Object Model

This project uses a simple **Page Object Model** structure to keep selectors and reusable actions separated from the test cases.

This improves:

* Readability
* Maintainability
* Reusability
* Test organization

Example:

```js
loginPage.login('standard_user', 'secret_sauce')
inventoryPage.addBackpackToCart()
cartPage.goToCheckout()
checkoutPage.fillCheckoutForm('Test', 'Data', '1000')
```

Instead of repeating selectors and Cypress commands across different test files, common actions are grouped inside page files.

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/eveporelmundo/saucedemo-cypress-tests.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Open Cypress Test Runner

```bash
npx cypress open
```

### 4. Run tests in headless mode

```bash
npx cypress run
```

---

## QA Decisions

Some important decisions made during this project:

* I separated the test cases by feature to keep the suite organized.
* I implemented Page Object Model to avoid duplicated selectors and improve maintainability.
* I prioritized critical business flows first: login, cart and checkout.
* I included negative scenarios to validate how the application handles errors.
* I kept the project structure simple and readable for portfolio and review purposes.

---

## What I Learned

Through this project, I practiced:

* Writing Cypress end-to-end tests
* Designing positive and negative test scenarios
* Structuring a test automation project
* Using Page Object Model
* Organizing tests by feature
* Validating user flows from login to checkout
* Creating documentation for a QA Automation portfolio

---

## Next Improvements

Future improvements for this project:

* Add Mochawesome HTML reports
* Add GitHub Actions to run tests automatically on every push
* Add fixtures for test data management
* Add API testing
* Add accessibility checks
* Add visual testing
* Add tags by test type or priority
* Add a test case matrix in Markdown or Google Sheets

---

## Portfolio Summary

This project demonstrates my ability to design and automate functional test cases for a web application using Cypress.

It shows practical QA skills including test planning, automation, maintainable structure, negative testing and end-to-end validation.

This project is aligned with QA Manual, QA Automation Junior, QA Analyst and Application Support roles.
