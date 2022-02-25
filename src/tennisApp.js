var tennis = function () {
  var playerOnePoints = 0;
  var playerTwoPoints = 0;

  return {
    addPointForPlayerOne: function () {
      playerOnePoints++;
    },

    addPointForPlayerTwo: function () {
      playerTwoPoints++;
    },

    getScore: function () {
      return getScore(playerOnePoints, playerTwoPoints);
    },
  };
};
