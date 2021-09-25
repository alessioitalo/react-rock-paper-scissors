const gameEngine = (player, house) => {
  if (player === house) {
    return 'DRAW';
  } else if (
    (player === 'rock' && house === 'scissors') ||
    (player === 'scissors' && house === 'paper') ||
    (player === 'paper' && house === 'rock')
  ) {
    return 'YOU WIN';
  } else {
    return 'YOU LOST';
  }
};

export default gameEngine