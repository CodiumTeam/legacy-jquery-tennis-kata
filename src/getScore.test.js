import { getScore } from './getScore';

describe('getScore', () => {
  it(`Should show "${'Fifteen-Love'}" when player1 gets ${1} and player2 gets ${0} points`, () => {
    const score = getScore(1, 0);

    expect(score).toBe('Fifteen-Love');
  });

  it(`Should show "${'Love-Fifteen'}" when player1 gets ${0} and player2 gets ${1} points`, () => {
    const score = getScore(0, 1);

    expect(score).toBe('Love-Fifteen');
  });

  it(`Should show "${'Thirty-Love'}" when player1 gets ${2} and player2 gets ${0} points`, () => {
    const score = getScore(2, 0);

    expect(score).toBe('Thirty-Love');
  });

  it(`Should show "${'Love-Thirty'}" when player1 gets ${0} and player2 gets ${2} points`, () => {
    const score = getScore(0, 2);

    expect(score).toBe('Love-Thirty');
  });

  it(`Should show "${'Forty-Love'}" when player1 gets ${3} and player2 gets ${0} points`, () => {
    const score = getScore(3, 0);

    expect(score).toBe('Forty-Love');
  });

  it(`Should show "${'Love-Forty'}" when player1 gets ${0} and player2 gets ${3} points`, () => {
    const score = getScore(0, 3);

    expect(score).toBe('Love-Forty');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${4} and player2 gets ${0} points`, () => {
    const score = getScore(4, 0);

    expect(score).toBe('Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${0} and player2 gets ${4} points`, () => {
    const score = getScore(0, 4);

    expect(score).toBe('Win for player2');
  });

  it(`Should show "${'Love-All'}" when player1 gets ${0} and player2 gets ${0} points`, () => {
    const score = getScore(0, 0);

    expect(score).toBe('Love-All');
  });

  it(`Should show "${'Fifteen-All'}" when player1 gets ${1} and player2 gets ${1} points`, () => {
    const score = getScore(1, 1);

    expect(score).toBe('Fifteen-All');
  });

  it(`Should show "${'Thirty-All'}" when player1 gets ${2} and player2 gets ${2} points`, () => {
    const score = getScore(2, 2);

    expect(score).toBe('Thirty-All');
  });

  it(`Should show "${'Deuce'}" when player1 gets ${3} and player2 gets ${3} points`, () => {
    const score = getScore(3, 3);

    expect(score).toBe('Deuce');
  });

  it(`Should show "${'Deuce'}" when player1 gets ${4} and player2 gets ${4} points`, () => {
    const score = getScore(4, 4);

    expect(score).toBe('Deuce');
  });

  it(`Should show "${'Thirty-Fifteen'}" when player1 gets ${2} and player2 gets ${1} points`, () => {
    const score = getScore(2, 1);

    expect(score).toBe('Thirty-Fifteen');
  });

  it(`Should show "${'Fifteen-Thirty'}" when player1 gets ${1} and player2 gets ${2} points`, () => {
    const score = getScore(1, 2);

    expect(score).toBe('Fifteen-Thirty');
  });

  it(`Should show "${'Forty-Fifteen'}" when player1 gets ${3} and player2 gets ${1} points`, () => {
    const score = getScore(3, 1);

    expect(score).toBe('Forty-Fifteen');
  });

  it(`Should show "${'Fifteen-Forty'}" when player1 gets ${1} and player2 gets ${3} points`, () => {
    const score = getScore(1, 3);

    expect(score).toBe('Fifteen-Forty');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${4} and player2 gets ${1} points`, () => {
    const score = getScore(4, 1);

    expect(score).toBe('Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${1} and player2 gets ${4} points`, () => {
    const score = getScore(1, 4);

    expect(score).toBe('Win for player2');
  });

  it(`Should show "${'Forty-Thirty'}" when player1 gets ${3} and player2 gets ${2} points`, () => {
    const score = getScore(3, 2);

    expect(score).toBe('Forty-Thirty');
  });

  it(`Should show "${'Thirty-Forty'}" when player1 gets ${2} and player2 gets ${3} points`, () => {
    const score = getScore(2, 3);

    expect(score).toBe('Thirty-Forty');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${4} and player2 gets ${2} points`, () => {
    const score = getScore(4, 2);

    expect(score).toBe('Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${2} and player2 gets ${4} points`, () => {
    const score = getScore(2, 4);

    expect(score).toBe('Win for player2');
  });

  it(`Should show "${'Advantage player1'}" when player1 gets ${4} and player2 gets ${3} points`, () => {
    const score = getScore(4, 3);

    expect(score).toBe('Advantage player1');
  });

  it(`Should show "${'Advantage player2'}" when player1 gets ${3} and player2 gets ${4} points`, () => {
    const score = getScore(3, 4);

    expect(score).toBe('Advantage player2');
  });

  it(`Should show "${'Advantage player1'}" when player1 gets ${5} and player2 gets ${4} points`, () => {
    const score = getScore(5, 4);

    expect(score).toBe('Advantage player1');
  });

  it(`Should show "${'Advantage player2'}" when player1 gets ${4} and player2 gets ${5} points`, () => {
    const score = getScore(4, 5);

    expect(score).toBe('Advantage player2');
  });

  it(`Should show "${'Advantage player1'}" when player1 gets ${15} and player2 gets ${14} points`, () => {
    const score = getScore(15, 14);

    expect(score).toBe('Advantage player1');
  });

  it(`Should show "${'Advantage player2'}" when player1 gets ${14} and player2 gets ${15} points`, () => {
    const score = getScore(14, 15);

    expect(score).toBe('Advantage player2');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${6} and player2 gets ${4} points`, () => {
    const score = getScore(6, 4);

    expect(score).toBe('Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${4} and player2 gets ${6} points`, () => {
    const score = getScore(4, 6);

    expect(score).toBe('Win for player2');
  });

  it(`Should show "${'Win for player1'}" when player1 gets ${16} and player2 gets ${14} points`, () => {
    const score = getScore(16, 14);

    expect(score).toBe('Win for player1');
  });

  it(`Should show "${'Win for player2'}" when player1 gets ${14} and player2 gets ${16} points`, () => {
    const score = getScore(14, 16);

    expect(score).toBe('Win for player2');
  });
});
