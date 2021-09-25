import styles from './Rules.module.css';

const Rules = ({onClick}) => {
  return (
    <div className={styles.rules} onClick={onClick}>
      <div className="button">RULES</div>
    </div>
  );
};

export default Rules;
