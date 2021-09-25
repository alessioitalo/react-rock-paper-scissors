import styles from './Modal.module.css';

const Modal = ({onClick}) => {
  return (
    <div className={styles.modal}>
      <span>
        RULES
        <div className={styles.close} onClick={onClick}></div>
      </span>
      <div className={styles.instructions}></div>
    </div>
  );
};

export default Modal;
