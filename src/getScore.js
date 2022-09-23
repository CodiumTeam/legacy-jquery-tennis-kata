export function getScore(m_score1, m_score2) {
  var score = '';
  if (hasSameScore(m_score1, m_score2)) {
    score = calculateSameScore(m_score1);
  } else if (isAdvantageOrWin(m_score1, m_score2)) {
    score = calculateAdvantageOrWin(m_score1, m_score2);
  } else {
    score = calculateRegularScore(m_score1, m_score2);
  }

  return score;
}

function calculateRegularScore(m_score1, m_score2) {
  var scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  return scores[m_score1] + '-' + scores[m_score2];
}

function calculateAdvantageOrWin(m_score1, m_score2, score) {
  var score = '';
  var minusResult = m_score1 - m_score2;
  if (minusResult === 1) {
    score = 'Advantage player1';
  } else if (minusResult === -1) {
    score = 'Advantage player2';
  } else if (minusResult >= 2) {
    score = 'Win for player1';
  } else {
    score = 'Win for player2';
  }
  return score;
}

function isAdvantageOrWin(m_score1, m_score2) {
  return m_score1 >= 4 || m_score2 >= 4;
}

function calculateSameScore(m_score1) {
  var scores = ['Love-All', 'Fifteen-All', 'Thirty-All'];

  return scores[m_score1] || 'Deuce';
}

function hasSameScore(m_score1, m_score2) {
  return m_score1 === m_score2;
}
