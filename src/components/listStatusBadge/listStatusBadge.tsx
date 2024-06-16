import React from 'react';
import styles from './styles.module.scss'
import {orderStatuses} from "../../types/order";

enum reviewStatuses {
  done = 'false',
  requested = 'true',
  unset = 'null'
}


interface IListStatusBadgeProps {
  status: orderStatuses
}

const ListStatusBadge: React.FC<IListStatusBadgeProps> = ({
  status
                                                          }) => {

  const getPreparedColor = ( status: orderStatuses ) => {
    switch (status) {
      case orderStatuses.created:
        return '#EFA413'
      case orderStatuses.cooking:
        return '#F21111'
      case orderStatuses.awaitDelivery:
        return '#CDE18F'
      case orderStatuses.inDelivery:
        return '#9AD08A'
      case orderStatuses.delivered:
        return '#FFF627'
      case orderStatuses.done:
        return '#288F25'
    }
  }

  const getPreparedText = (status: orderStatuses) => {
    switch (status) {
      case orderStatuses.created:
        return 'В обработке'
      case orderStatuses.cooking:
        return 'Готовится'
      case orderStatuses.awaitDelivery:
        return 'Готов к доставке'
      case orderStatuses.inDelivery:
        return 'У курьера'
      case orderStatuses.delivered:
        return 'Ожидает подтверждения'
      case orderStatuses.done:
        return 'Доставлено'
    }
  }

  const preparedText = getPreparedText(status)
  const preparedColor = getPreparedColor(status)

  return (
    <div className={styles.wrapper} style={{ background: preparedColor}}>
      {preparedText}
    </div>
  );
};

export default ListStatusBadge;