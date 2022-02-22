function getScore(m_score1, m_score2) {
  var score = '';

  if (hasSameScore(m_score1, m_score2)) {
    score = calculateSameScore(m_score1);
  } else if (isAdvantageOrWin(m_score1, m_score2)) {
    score = calculateAdvantageOrWinScore(m_score1, m_score2, score);
  } else {
    score = calculateRegularScore(m_score1, score, m_score2);
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

function isAdvantageOrWin(m_score1, m_score2) {
  return m_score1 >= 4 || m_score2 >= 4;
}

function calculateRegularScore(m_score1, score, m_score2) {
  var tempScore = 0;
  for (var i = 1; i < 3; i++) {
    if (i === 1) {
      tempScore = m_score1;
    } else {
      score += '-';
      tempScore = m_score2;
    }
    switch (tempScore) {
      case 0:
        score += 'Love';
        break;
      case 1:
        score += 'Fifteen';
        break;
      case 2:
        score += 'Thirty';
        break;
      case 3:
        score += 'Forty';
        break;
    }
  }
  return score;
}

function calculateAdvantageOrWinScore(m_score1, m_score2, score) {
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

// THIS IS A HACK FOR TESTING PURPOSES ONLY!!!
try {
  exports.getScore = getScore;
} catch (e) {}
