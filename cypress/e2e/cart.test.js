/// <reference types="Cypress" />
describe("Cart tests", () => {

    beforeEach(() => {
      cy.visit("/search").get("main").injectAxe()
    })

    it("Add to cart", () => {
        cy.get('.product-card-module--productCardStyle--1L1Wb').first().click()
        cy.get('.add-to-cart-module--addToCart--oYDVY').click()

        cy.get('.cart-button-module--badge--2X_nx').contains('1')

      })

  })