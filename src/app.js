import { getScore } from './getScore.js';

$(function () {
  var addPointPlayerOne = $('#addPointPlayerOne');
  var addPointPlayerTwo = $('#addPointPlayerTwo');
  var m_score1 = 0;
  var m_score2 = 0;

  var score = getScore(m_score1, m_score2);
  $('#score').text(score);

  addPointPlayerOne.on('click', function () {
    m_score1 += 1;
    var score = getScore(m_score1, m_score2);
    $('#score').text(score);

    var scoreResult = $('#score').text();

    if (scoreResult.indexOf('Win') !== -1) {
      addPointPlayerOne.prop('disabled', true);
      addPointPlayerTwo.prop('disabled', true);
    }
  });

  addPointPlayerTwo.on('click', function () {
    m_score2 += 1;
    var score = getScore(m_score1, m_score2);
    $('#score').text(score);

    var scoreResult = $('#score').text();

    if (scoreResult.indexOf('Win') !== -1) {
      addPointPlayerOne.prop('disabled', true);
      addPointPlayerTwo.prop('disabled', true);
    }
  });
});
