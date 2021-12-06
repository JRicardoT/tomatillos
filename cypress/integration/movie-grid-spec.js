
describe('Default movie grid view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  it('should display a header and search bar', () => {
    cy.get('header').contains('Rancid Tomatillos');
    cy.get('input');
  })
  it('should display an array of movie posters', () => {
    cy.get('.movie-poster').should('have.length', 40)
  })
})