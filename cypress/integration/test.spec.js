// Cypress Challenge
//      Test all basic operations
//          - single digit: +/-/*/÷
//          - double digit: +/-
//      Test more complex operations
//          - chaining together operations
//              e.g. 2 + 2 * 5 - 1 + 27 / 3
//          - if you have the functionality for sqrt etc you can test that
//      Anything else you want to try

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('Load the Page', () => {
    it('successfully loads', () => {
        cy.visit('http://127.0.0.1:5501/');
    })
})

describe('Basic operations (Single Digits)', () => {
    it('7 + 2 equals 9', () => {
        // 1. Arrange
        //       Go into local host (page the user is visiting)
        cy.visit('http://127.0.0.1:5501/');

        // 2. Act
        cy.get('[data-cy=seven]').click();
        cy.get('[data-cy=add]').click();
        cy.get('[data-cy=two]').click();
        cy.get('[data-cy=equals]').click();

        // 3. Assert
        //      What should happen/ the test

        // Use contain cause we're using div's and they don't have values 
        cy.get('[data-cy=display]').should('contain', 9);
    })

    it('9 - 3 equals 6', () => {
        // 1. Arrange
        cy.visit('http://127.0.0.1:5501/');

        // 2. Act
        cy.get('[data-cy=nine]').click();
        cy.get('[data-cy=subtract]').click();
        cy.get('[data-cy=three]').click();
        cy.get('[data-cy=equals]').click();

        // 3. Assert
        cy.get('[data-cy=display]').should('contain', 6);
    })

    it('4 * 5 equals 20', () => {
        // 1. Arrange
        cy.visit('http://127.0.0.1:5501/');

        // 2. Act
        cy.get('[data-cy=four]').click();
        cy.get('[data-cy=multiply]').click();
        cy.get('[data-cy=five]').click();
        cy.get('[data-cy=equals]').click();

        // 3. Assert
        cy.get('[data-cy=display]').should('contain', 20);
    })

    it('8 / 2 equals 4', () => {
        // 1. Arrange
        cy.visit('http://127.0.0.1:5501/');

        // 2. Act
        cy.get('[data-cy=eight]').click();
        cy.get('[data-cy=divide]').click();
        cy.get('[data-cy=two]').click();
        cy.get('[data-cy=equals]').click();

        // 3. Assert
        cy.get('[data-cy=display]').should('contain', 4);
    })
})


describe('Basic operations (Double Digits)', () => {
    it('13 + 21 equals 34', () => {
        // 1. Arrange
        cy.visit('http://127.0.0.1:5501/');

        // 2. Act
        cy.get('[data-cy=one]').click();
        cy.get('[data-cy=three]').click();
        cy.get('[data-cy=add]').click();
        cy.get('[data-cy=two]').click();
        cy.get('[data-cy=one]').click();
        cy.get('[data-cy=equals]').click();

        // 3. Assert
        cy.get('[data-cy=display]').should('contain', 34);
    })

    it('46 - 11 equals 35', () => {
        // 1. Arrange
        cy.visit('http://127.0.0.1:5501/');

        // 2. Act
        cy.get('[data-cy=four]').click();
        cy.get('[data-cy=six]').click();
        cy.get('[data-cy=subtract]').click();
        cy.get('[data-cy=one]').click();
        cy.get('[data-cy=one]').click();
        cy.get('[data-cy=equals]').click();

        // 3. Assert
        cy.get('[data-cy=display]').should('contain', 35);
    })

    it('77 * 13 equals 1001', () => {
        // 1. Arrange
        cy.visit('http://127.0.0.1:5501/');

        // 2. Act
        cy.get('[data-cy=seven]').click();
        cy.get('[data-cy=seven]').click();
        cy.get('[data-cy=multiply]').click();
        cy.get('[data-cy=one]').click();
        cy.get('[data-cy=three]').click();
        cy.get('[data-cy=equals]').click();

        // 3. Assert
        cy.get('[data-cy=display]').should('contain', 1001);
    })

    it('50 / 10 equals 5', () => {
        // 1. Arrange
        cy.visit('http://127.0.0.1:5501/');

        // 2. Act
        cy.get('[data-cy=five]').click();
        cy.get('[data-cy=zero]').click();
        cy.get('[data-cy=divide]').click();
        cy.get('[data-cy=one]').click();
        cy.get('[data-cy=zero]').click();
        cy.get('[data-cy=equals]').click();

        // 3. Assert
        cy.get('[data-cy=display]').should('contain', 5);
    })
})