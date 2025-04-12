/// <reference types="cypress" />

describe("Verificar los filtros de ordenamiento", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
  })

  it("Filtro: Name (A to Z)", () => {
    cy.get('.product_sort_container').select('Name (A to Z)')

    const nombres = []
    cy.get('.inventory_item_name').each(($el) => {
      nombres.push($el.text())
    }).then(() => {
      const ordenado = [...nombres].sort()
      expect(nombres).to.deep.equal(ordenado)
    })
  })

  it("Filtro: Name (Z to A)", () => {
    cy.get('.product_sort_container').select('Name (Z to A)')

    const nombres = []
    cy.get('.inventory_item_name').each(($el) => {
      nombres.push($el.text())
    }).then(() => {
      const ordenado = [...nombres].sort().reverse()
      expect(nombres).to.deep.equal(ordenado)
    })
  })

  it("Filtro: Price (low to high)", () => {
    cy.get('.product_sort_container').select('Price (low to high)')

    const precios = []
    cy.get('.inventory_item_price').each(($el) => {
      precios.push(parseFloat($el.text().replace('$', '')))
    }).then(() => {
      const ordenado = [...precios].sort((a, b) => a - b)
      expect(precios).to.deep.equal(ordenado)
    })
  })

  it("Filtro: Price (high to low)", () => {
    cy.get('.product_sort_container').select('Price (high to low)')

    const precios = []
    cy.get('.inventory_item_price').each(($el) => {
      precios.push(parseFloat($el.text().replace('$', '')))
    }).then(() => {
      const ordenado = [...precios].sort((a, b) => b - a)
      expect(precios).to.deep.equal(ordenado)
    })
  })
})
