import styles from './Circle.module.css';

const Circle = ({ type, onClick }) => {
  const playerChoice = () => {
    onClick();
  };
  return (
    <div onClick={playerChoice} className={`${type} ${styles.circle}`}></div>
  );
};

export default Circle;
