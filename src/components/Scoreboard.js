import styles from './Scoreboard.module.css';

const Scoreboard = ({ score }) => {
  return (
    <div className={styles.scoreboard}>
      <ul>
        <li>ROCK</li>
        <li>PAPER</li>
        <li>SCISSOR</li>
      </ul>
      <div className={styles.score}>
        SCORE
        <div className={styles.points}>{score}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
