/// <reference types="cypress" />

describe('Test de navegacion entre secciones', () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
  })

  it("Navegar al carrito desde productos", () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should("include", "/cart.html")
    cy.contains("Your Cart").should("be.visible")
  })

  it("Ir al checkout desde el carrito", () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should("include", "/cart.html")
    cy.get('[data-test="checkout"]').click()
    cy.url().should("include", "/checkout-step-one.html")
    cy.contains("Checkout: Your Information").should("be.visible")
  })

  it("Completar el checkout y confirmar orden", () => {
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("Juan")
    cy.get('[data-test="lastName"]').type("Perez")
    cy.get('[data-test="postalCode"]').type("1234")
    cy.get('[data-test="continue"]').click()
    cy.url().should("include", "/checkout-step-two.html")
    cy.get('[data-test="finish"]').click()
    cy.url().should("include", "/checkout-complete.html")
    cy.contains("Thank you for your order!").should("be.visible")
  })
})