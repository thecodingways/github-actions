describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.findByTestId('lere-sticky-footer')
      .findAllByTestId('ymal-tile-condensed')
      .should('have.length', 3333)
  })
})