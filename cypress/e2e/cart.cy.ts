describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays products', () => {
    cy.wait(2000);
    cy.get('[data-cy=product]').should('have.length', 1);
  });

  it('increases product quantity for the first item', () => {
    cy.get('[data-cy=product-quantity]').eq(0).should('contain', '0');
    cy.get('[data-cy=plus-button]').eq(0).click();
    cy.get('[data-cy=product-quantity]').eq(0).should('contain', '1');
  });

  it('decreases product quantity for the first item', () => {
    cy.get('[data-cy=plus-button]').eq(0).click();
    cy.get('[data-cy=product-quantity]').eq(0).should('contain', '1');
    cy.get('[data-cy=minus-button]').eq(0).click();
    cy.get('[data-cy=product-quantity]').eq(0).should('contain', '0');
  });

  it('removes the first product from cart', () => {
    cy.get('[data-cy=product-name]')
      .eq(0)
      .invoke('text')
      .then((firstProductName) => {
        cy.get('[data-cy=remove-button]').eq(0).click();
        cy.get('[data-cy=product-name]').should(
          'not.contain',
          firstProductName,
        );
      });
  });

  it('changes total price when quantity changes', () => {
    cy.get('[data-cy=total]')
      .invoke('text')
      .then((initialTotalPrice) => {
        cy.get('[data-cy=plus-button]').eq(0).click();
        cy.get('[data-cy=total]').should('not.contain', initialTotalPrice);
      });
  });

  it('changes total price when product is added', () => {
    cy.get('[data-cy=total]')
      .invoke('text')
      .then((initialTotalPrice) => {
        cy.get('[data-cy=plus-button]').eq(0).click();
        cy.get('[data-cy=total]').should('not.contain', initialTotalPrice);
      });
  });

  it('changes filter when a color is selected', () => {
    cy.get('[data-testid=color-filter]').click();
    cy.get('[data-testid=color-filter-dropdown]').should('be.visible');
    cy.get('[data-testid="color-filter-dropdown"]').eq(4).click();
    cy.get('[data-testid=color-filter]').should('contain', 'Red');
  });

  it('changes products when a color is selected', () => {
    cy.get('[data-testid=color-filter]').click();
    cy.get('[data-testid=color-filter-dropdown]').should('be.visible');
    cy.get('[data-testid="color-filter-dropdown"]').eq(4).click();
    cy.get('[data-cy=product]').should('have.length', 1);
  });

  it('only displays products of the selected color', () => {
    cy.get('[data-testid=color-filter]').click();
    cy.get('[data-testid=color-filter-dropdown]').should('be.visible');
    cy.get('[data-testid="color-filter-dropdown"]').eq(4).click();
    cy.get('[data-cy=product]').should('have.length', 1);
    cy.get('[data-cy=product-name]').should('contain', 'Red Pin');
  });
});
