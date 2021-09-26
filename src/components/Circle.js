import styles from './Circle.module.css';

const Circle = ({ type, onClick, animatedShadow }) => {
  const playerChoice = () => {
    onClick(type);
  };
  
  return (
    <div onClick={playerChoice} className={`${type} ${styles.circle} ${animatedShadow}`}></div>
  );
};

export default Circle;
