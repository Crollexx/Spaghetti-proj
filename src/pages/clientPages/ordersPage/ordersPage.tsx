import React from 'react';
import styles from './styles.module.scss'
import DefaultList from "../../../components/list/list";

const ClientOrdersPage = () => {
  
  const orders = [
    {
      title: '111',
      id: 1
    },{
      title: '222',
      id: 2
    },{
      title: '333',
      id: 3
    },{
      title: '444',
      id: 4
    },
  ]

  return (
    <div className={styles.wrapper}>
      <h3>Заказы</h3>
      <DefaultList

        // @ts-ignore
        data={orders}
        onSelectFilter={() => {}}
        onClearFilter={() => {}}
        notificationText='Клиенсткий представитель просит Вас оставить отзыв о заказе №101'
      />
    </div>
  );
};

export default ClientOrdersPage;