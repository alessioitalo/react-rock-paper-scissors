import { useEffect, useState, useCallback } from 'react';
import Circle from './Circle';
import styles from './Result.module.css';

const Result = ({ player, house, reset, setScore, score }) => {
  const [housVisible, setHouseVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [result, setResult] = useState();

  const gameEngine = useCallback(() => {
    if (player === house) {
      setResult("IT'S A DRAW");
    } else if (
      (player === 'rock' && house === 'scissors') ||
      (player === 'scissors' && house === 'paper') ||
      (player === 'paper' && house === 'rock')
    ) {
      setResult('YOU WON');
      setScore((actualScore) => actualScore + 1);
    } else {
      setResult('YOU LOST');
      setScore(0);
    }
  }, [player, house, setScore]);

  useEffect(() => {
    console.log('effect fired');
    setTimeout(() => {
      setHouseVisible(true);
    }, 1500);
    setTimeout(() => {
      setResultVisible(true);
      gameEngine();
    }, 2000);
  }, [gameEngine]);

  return (
    <div className={styles.container}>
      <div>
        YOU PICKED
        <Circle type={player} onClick={reset} />
      </div>
      {resultVisible && (
        <div className={styles.result}>
          {result}
          <div onClick={reset} className='button'>
            PLAY AGAIN
          </div>
        </div>
      )}
      <div>
        THE HOUSE PICKED
        {housVisible ? (
          <Circle type={house} onClick={reset} />
        ) : (
          <div className={styles.invisible}></div>
        )}
      </div>
    </div>
  );
};

export default Result;
