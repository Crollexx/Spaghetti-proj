import React from 'react';
import styles from './styles.module.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const NotificationCard: React.FC<any>  = ({type, text, isOpen, onClick}) => {

  if (!isOpen) {
    return null
  }

  const preparedStyles = `${styles.text} ${type === 'error' ? styles.error : ''}`
  return (
    <div className={styles.container} onClick={() => onClick()}>
      <div className={styles.content}>
        <NotificationsNoneIcon className={styles.icon} />
        <span className={preparedStyles}>
        {text}
      </span>
      </div>
    </div>
  );
};

export default NotificationCard;