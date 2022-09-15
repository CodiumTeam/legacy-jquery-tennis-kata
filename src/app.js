$(function () {
  var addPointPlayerOne = $('#addPointPlayerOne');
  var addPointPlayerTwo = $('#addPointPlayerTwo');
  var m_score1 = 0;
  var m_score2 = 0;

  getScore(m_score1, m_score2);

  addPointPlayerOne.on('click', function () {
    m_score1 += 1;
    getScore(m_score1, m_score2);
    var scoreResult = $('#score').text();

    if (scoreResult.indexOf('Win') !== -1) {
      addPointPlayerOne.prop('disabled', true);
      addPointPlayerTwo.prop('disabled', true);
    }
  });

  addPointPlayerTwo.on('click', function () {
    m_score2 += 1;
    getScore(m_score1, m_score2);

    var scoreResult = $('#score').text();

    if (scoreResult.indexOf('Win') !== -1) {
      addPointPlayerOne.prop('disabled', true);
      addPointPlayerTwo.prop('disabled', true);
    }
  });
});

function getScore(m_score1, m_score2) {
  var score = '';
  var tempScore = 0;
  if (m_score1 === m_score2) {
    switch (m_score1) {
      case 0:
        $('#score').text('Love-All');
        break;
      case 1:
        $('#score').text('Fifteen-All');
        break;
      case 2:
        $('#score').text('Thirty-All');
        break;
      default:
        $('#score').text('Deuce');
        break;
    }
  } else if (m_score1 >= 4 || m_score2 >= 4) {
    var minusResult = m_score1 - m_score2;
    if (minusResult === 1) {
      $('#score').text('Advantage player1');
    } else if (minusResult === -1) {
      $('#score').text('Advantage player2');
    } else if (minusResult >= 2) {
      $('#score').text('Win for player1');
    } else {
      $('#score').text('Win for player2');
    }
  } else {
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

    $('#score').text(score);
  }
}
