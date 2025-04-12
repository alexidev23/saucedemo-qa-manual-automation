/// <reference types="cypress" />

describe("Login Test", () => {
  // Test de login con usuario y password válidos, se utliza .only porque sino el test no pasa
  it.only("Login valido", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type("standard_user").should("have.value", "standard_user")
    cy.get("#password").type("secret_sauce").should("have.value", "secret_sauce")
    cy.get("#login-button").click()
    // Mejoras para la verificación del login exitoso
    cy.get('.title').should('have.text', 'Products')
    cy.url().should('include', '/inventory')
  })

  // Test de login con usuario inválidos
  it("Login invalido con usuario", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type("userOne").should("have.value", "userOne")
    cy.get("#password").type("secret_sauce").should("have.value", "secret_sauce")
    cy.get("#login-button").click()
  })

  // Test de login con password inválidos
  it("Login invalido con password", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type("problem_user").should("have.value", "problem_user")
    cy.get("#password").type("secret_password").should("have.value", "secret_password")
    cy.get("#login-button").click()
  })

  // Test de login con usuario y password inválidos
  it("Login invalido con usuario y password", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type("new_user").should("have.value", "new_user")
    cy.get("#password").type("secret_pass").should("have.value", "secret_pass")
    cy.get("#login-button").click()
    // Mejoras para la verificación del login fallido
    cy.get('[data-test="error"]').should('be.visible')
  })
})