/// <reference types="cypress" />

describe("Test Productos", () => {
  it("Agregando productos existentes al carrito", () => {
    cy.visit("https://www.saucedemo.com/inventory.html")
  })
})