import { useEffect, useState } from 'react';
import gameEngine from '../game-engine';
import Circle from './Circle';
import styles from './Result.module.css';

const Result = ({ player, house, reset }) => {
  const [housVisible, setHouseVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [result, setResult] = useState()

  useEffect(() => {
    setTimeout(() => {
      setHouseVisible(true);
    }, 1500);
    setTimeout(() => {
      setResultVisible(true);
    }, 2000);
  });

  return (
    <div className={styles.container}>
      <div>
        YOU PICKED
        <Circle type={player} onClick={reset} />
      </div>
      {resultVisible && (
        <div className={styles.result}>
          YOU WIN{' '}
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
