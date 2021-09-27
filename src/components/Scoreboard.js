import styles from './Scoreboard.module.css';
import logo from '../images/logo.svg';

const Scoreboard = ({ score }) => {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.score}>
        SCORE
        <div className={styles.points}>{score}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
