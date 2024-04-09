describe('Add product to cart', () => {
  it('should be able to search for products', () => {
    cy.visit('/')

    cy.get('input[name=q]').type('Moletom').parent('form').submit()

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=Moletom')

    cy.get('a[href^="/product"').should('exist')
  })

  it('should not be able to visit search page without a search query', () => {
    cy.on('uncaught:exception', () => false)

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})