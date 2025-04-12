/// <reference types="cypress" />

describe("Test Productos", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
  })

  it("Agregando productos existentes al carrito", () => {
    cy.get('[data-test="inventory-item"]').eq(0).contains('Add to cart').click()
    cy.get('[data-test="inventory-item"]').eq(1).contains('Add to cart').click()
    cy.get('[data-test="inventory-item"]').eq(2).contains('Add to cart').click()
    cy.get('.shopping_cart_badge').should('have.text', '3')
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
  })

  it("Quitar productos del carrito", () => {
    cy.get('[data-test="inventory-item"]').eq(0).contains('Add to cart').click()
    cy.get('[data-test="inventory-item"]').eq(1).contains('Add to cart').click()
    cy.get('[data-test="inventory-item"]').eq(2).contains('Add to cart').click()

    cy.get('[data-test="inventory-item"]').eq(1).contains('Remove').click()
    cy.get('[data-test="inventory-item"]').eq(2).contains('Remove').click()
    cy.get('[data-test="inventory-item"]').eq(0).contains('Remove').click()

    cy.get('.shopping_cart_link').should('have.text', '')
  })
})