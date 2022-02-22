function getScore(m_score1, m_score2) {
  var score = '';

  if (hasSameScore(m_score1, m_score2)) {
    score = calculateSameScore(m_score1);
  } else if (isAdvantage(m_score1, m_score2)) {
    score = calculateAdvantageScore(m_score1, m_score2);
  } else if (isWinScore(m_score1, m_score2)) {
    score = calculateWinScore(m_score1, m_score2, score);
  } else {
    score = calculateRegularScore(m_score1, m_score2);
  }

  return score;
}

function hasSameScore(m_score1, m_score2) {
  return m_score1 === m_score2;
}

function calculateSameScore(m_score1) {
  var scores = ['Love-All', 'Fifteen-All', 'Thirty-All'];

  return scores[m_score1] || 'Deuce';
}

function isAdvantage(m_score1, m_score2) {
  return (
    (m_score1 >= 4 || m_score2 >= 4) && Math.abs(m_score1 - m_score2) === 1
  );
}

function calculateAdvantageScore(m_score1, m_score2) {
  var score = '';
  var minusResult = m_score1 - m_score2;

  if (minusResult === 1) {
    score = 'Advantage player1';
  } else if (minusResult === -1) {
    score = 'Advantage player2';
  }

  return score;
}

function isWinScore(m_score1, m_score2) {
  return (m_score1 >= 4 || m_score2 >= 4) && Math.abs(m_score1 - m_score2) > 1;
}

function calculateWinScore(m_score1, m_score2) {
  var score = '';
  if (m_score1 - m_score2 >= 2) {
    score = 'Win for player1';
  } else {
    score = 'Win for player2';
  }
  return score;
}

function calculateRegularScore(m_score1, m_score2) {
  var scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  return scores[m_score1] + '-' + scores[m_score2];
}

// THIS IS A HACK FOR TESTING PURPOSES ONLY!!!
try {
  exports.getScore = getScore;
} catch (e) {}
