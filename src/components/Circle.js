import styles from './Circle.module.css';

const Circle = ({type}) => {
  return <div className={`${type} ${styles.circle}`}></div>;
};

export default Circle;
