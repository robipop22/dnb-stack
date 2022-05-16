import { BOOK_CARD_TEST_IDS } from '~/constants/test/bookCard';

describe('Books', () => {
  it('should display the data from "Zend Framework in Action"', () => {
    cy.fixture('specificBookData').then(specificBookData => {
      cy.visit('/books');
      cy.get(`[data-testid="${BOOK_CARD_TEST_IDS.BOOK_CARD_CONTAINER}-${specificBookData.isbn}"]`).should('be.visible');
      cy.get(`[data-testid="${BOOK_CARD_TEST_IDS.BOOK_CARD_TITLE}-${specificBookData.isbn}"]`)
        .should('be.visible')
        .and('have.text', specificBookData.title);
      cy.get(`[data-testid="${BOOK_CARD_TEST_IDS.BOOK_CARD_SHORT_DESCRIPTION}-${specificBookData.isbn}"]`)
        .should('be.visible')
        .and('have.text', specificBookData.shortDescription);
      cy.get(`[data-testid="${BOOK_CARD_TEST_IDS.BOOK_CARD_LONG_DESCRIPTION}-${specificBookData.isbn}"]`)
        .should('be.visible')
        .and('have.text', specificBookData.longDescription);
    });
  });
});
