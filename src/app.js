$(function () {
  var addPointPlayerOne = $('#addPointPlayerOne');
  var addPointPlayerTwo = $('#addPointPlayerTwo');

  var game = tennis();

  $('#score').text(game.getScore());

  addPointPlayerOne.on('click', function () {
    game.addPointForPlayerOne();

    $('#score').text(game.getScore());

    if (game.getScore().indexOf('Win') !== -1) {
      addPointPlayerOne.prop('disabled', true);
      addPointPlayerTwo.prop('disabled', true);
    }
  });

  addPointPlayerTwo.on('click', function () {
    game.addPointForPlayerTwo();

    $('#score').text(game.getScore());

    if (game.getScore().indexOf('Win') !== -1) {
      addPointPlayerOne.prop('disabled', true);
      addPointPlayerTwo.prop('disabled', true);
    }
  });
});
