import closeModal from 'utils/modal/close';
import styles from 'styles/modal.module.css';

const Modal = ({ setActiveTab }) => {
  return (
    <div className={styles['modal-wrapper']}>
      <div>
        <div className={styles['modal-label']}>GENERATE REPORT</div>
        <div className={styles['modal-btn-wrapper']}>
          <div className={styles['modal-btn-left']} onClick={closeModal}>ONGOING</div>
          <div className={styles['modal-btn-right']} onClick={() => { setActiveTab(1); closeModal() }}>TO RESULT</div>
        </div>
      </div>
      <div className={styles['modal-close']} onClick={closeModal}>&times;</div>
    </div>
  )
}

export default Modal;