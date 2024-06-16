import React from 'react';
import styles from './styles.module.scss'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export interface IListNotificationProps {
  orderID: number
  showNotification: boolean
}
const ListNotification: React.FC<IListNotificationProps> = ({ orderID, showNotification }) => {
  if (!showNotification) return null
  
  return (
    <div className={styles.wrapper}>
      <NotificationsOutlinedIcon/>
      <span>
        Клиенсткий представитель просит Вас оставить отзыв о заказе №{orderID}
      </span>
    </div>
  );
};

export default ListNotification;