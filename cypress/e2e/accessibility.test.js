/// <reference types="Cypress" />
describe("First tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })

  it("Check text", () => {
    cy.get('#top').contains('TOP PRODUCTS')
  })

  it("Check nav", () => {
    cy.get('.navigation-module--navLink--271wt').click()
  })

  it("When visited All products page, first product is 'Table set' ", () => {
    cy.get('.navigation-module--navLink--271wt').click()
    cy.get('.product-card-module--productHeadingStyle--28Hhm').first().contains('Table set');
  })

})