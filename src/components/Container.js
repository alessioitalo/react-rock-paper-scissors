import styles from './Container.module.css';

const Container = ({ children }) => {
  return <div className={styles.container}>
  {/* <div className={styles.triangle}>
    <div className={styles.top}/>
    <div className={styles.left}/>
    <div className={styles.right}/>
  </div> */}
  
  {children}</div>;
};

export default Container;
