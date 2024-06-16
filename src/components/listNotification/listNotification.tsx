import React from 'react';
import styles from './styles.module.scss'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export interface IListNotificationProps {
  notificationText: string
}
const ListNotification: React.FC<IListNotificationProps> = ({ notificationText }) => {
  
  return (
    <div className={styles.wrapper}>
      <NotificationsOutlinedIcon className={styles.icon}/>
      <span>
        {notificationText}
      </span>
    </div>
  );
};

export default ListNotification;