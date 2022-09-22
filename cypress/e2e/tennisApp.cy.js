describe('Tennis App', () => {
  it(`Should show "${'Fifteen-Love'}" when player1 gets ${1} and player2 gets ${0} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Fifteen-Love');
  });

  it(`Should show "${'Love-Fifteen'}" when player1 gets ${0} and player2 gets ${1} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Love-Fifteen');
  });

  it(`Should show "${'Thirty-Love'}" when player1 gets ${2} and player2 gets ${0} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Thirty-Love');
  });

  it(`Should show "${'Love-Thirty'}" when player1 gets ${0} and player2 gets ${2} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Love-Thirty');
  });

  it(`Should show "${'Forty-Love'}" when player1 gets ${3} and player2 gets ${0} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Forty-Love');
  });

  it(`Should show "${'Love-Forty'}" when player1 gets ${0} and player2 gets ${3} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Love-Forty');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${4} and player2 gets ${0} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${0} and player2 gets ${4} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Win for player2');
  });

  it(`Should show "${'Love-All'}" when player1 gets ${0} and player2 gets ${0} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#score').should('have.text', 'Love-All');
  });

  it(`Should show "${'Fifteen-All'}" when player1 gets ${1} and player2 gets ${1} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Fifteen-All');
  });

  it(`Should show "${'Thirty-All'}" when player1 gets ${2} and player2 gets ${2} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Thirty-All');
  });

  it(`Should show "${'Deuce'}" when player1 gets ${3} and player2 gets ${3} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Deuce');
  });

  it(`Should show "${'Deuce'}" when player1 gets ${4} and player2 gets ${4} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Deuce');
  });

  it(`Should show "${'Thirty-Fifteen'}" when player1 gets ${2} and player2 gets ${1} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Thirty-Fifteen');
  });

  it(`Should show "${'Fifteen-Thirty'}" when player1 gets ${1} and player2 gets ${2} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Fifteen-Thirty');
  });

  it(`Should show "${'Forty-Fifteen'}" when player1 gets ${3} and player2 gets ${1} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Forty-Fifteen');
  });

  it(`Should show "${'Fifteen-Forty'}" when player1 gets ${1} and player2 gets ${3} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Fifteen-Forty');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${4} and player2 gets ${1} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${1} and player2 gets ${4} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Win for player2');
  });

  it(`Should show "${'Forty-Thirty'}" when player1 gets ${3} and player2 gets ${2} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Forty-Thirty');
  });

  it(`Should show "${'Thirty-Forty'}" when player1 gets ${2} and player2 gets ${3} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Thirty-Forty');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${4} and player2 gets ${2} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${2} and player2 gets ${4} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Win for player2');
  });

  it(`Should show "${'Advantage player1'}" when player1 gets ${4} and player2 gets ${3} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Advantage player1');
  });

  it(`Should show "${'Advantage player2'}" when player1 gets ${3} and player2 gets ${4} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Advantage player2');
  });

  it(`Should show "${'Advantage player1'}" when player1 gets ${5} and player2 gets ${4} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Advantage player1');
  });

  it(`Should show "${'Advantage player2'}" when player1 gets ${4} and player2 gets ${5} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Advantage player2');
  });

  it(`Should show "${'Advantage player1'}" when player1 gets ${15} and player2 gets ${14} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Advantage player1');
  });

  it(`Should show "${'Advantage player2'}" when player1 gets ${14} and player2 gets ${15} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Advantage player2');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${6} and player2 gets ${4} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${4} and player2 gets ${6} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Win for player2');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${16} and player2 gets ${14} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerOne').click();

    cy.get('#score').should('have.text', 'Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${14} and player2 gets ${16} points`, () => {
    cy.visit('http://localhost:8080/');

    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerOne').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();
    cy.get('#addPointPlayerTwo').click();

    cy.get('#score').should('have.text', 'Win for player2');
  });
});
