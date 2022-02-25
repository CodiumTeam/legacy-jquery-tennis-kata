$(function () {
  var addPointPlayerOne = $('#addPointPlayerOne');
  var addPointPlayerTwo = $('#addPointPlayerTwo');

  var game = tennis();

  var score = game.getScore();

  $('#score').text(`${score}`);

  addPointPlayerOne.on('click', function () {
    game.addPointForPlayerOne();

    var score = game.getScore();
    $('#score').text(`${score}`);

    var scoreResult = $('#score').text();

    if (scoreResult.indexOf('Win') !== -1) {
      addPointPlayerOne.prop('disabled', true);
      addPointPlayerTwo.prop('disabled', true);
    }
  });

  addPointPlayerTwo.on('click', function () {
    game.addPointForPlayerTwo();
    var score = game.getScore();

    $('#score').text(`${score}`);

    var scoreResult = $('#score').text();

    if (scoreResult.indexOf('Win') !== -1) {
      addPointPlayerOne.prop('disabled', true);
      addPointPlayerTwo.prop('disabled', true);
    }
  });
});
