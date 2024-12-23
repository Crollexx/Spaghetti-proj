import React from 'react';
import styles from './styles.module.scss'
import {IOrder, IOrderStatuses, orderStatuses} from "../../types/order";
import {useUserData} from "../../hooks/useUserData";
import {usersRoles} from "../../types/roles";

interface IOrderCardProps extends IOrder {
  onFeedbackClick?: () => void;
  onDeliveryAccept?: () => void
  onDeliveryReject?: () => void
  editAvailable?: boolean
  onEditAddCLick?: () => void
  onEditPaymentCLick?: () => void
  onEditDeliveryCLick?: () => void
}

const OrderCard: React.FC<IOrderCardProps> = ({
                                                id,
                                                orderDate,
                                                total,
                                                items,
                                                servingType,
                                                deliveryType,
                                                paymentType,
                                                feedbackNotification,
  status,
                                                deliveryNotification,
  editAvailable = false,
                                                onDeliveryAccept = () => {},
                                                onDeliveryReject = () => {},
                                                onFeedbackClick = () => {},
                                                onEditAddCLick = () => {},
                                                onEditPaymentCLick = () => {},
                                                onEditDeliveryCLick = () => {},
                                              }) => {
  const { userRole, onRoleChange } = useUserData()

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        Заказ № {id}
      </span>
      <div className={styles.info}>
        <div className={styles.row}>
          <div className={styles.cell}>
            <span>Время заказа</span>
            <span>{orderDate}</span>
          </div>
          <div className={styles.cell}>
            <span>Сервировка</span>
            <span>{servingType}</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>
            <span>Получение</span>
            <span>{deliveryType}</span>
          </div>
          <div className={styles.cell}>
            <span>Оплата</span>
            <span>{paymentType}</span>
          </div>
        </div>
      </div>
      {feedbackNotification ? (
        <button
          className={styles.button}
          onClick={() => onFeedbackClick()}
        >
          Оставить отзыв
        </button>
      ) : null}
      <div className={styles['list-wrapper']}>
        <span className={styles['list-title']}>
          Детали заказа
        </span>
        <div className={styles.list}>
          {items?.map(({name, price, id}) => (
            <div className={styles['list-item']} key={id}>
              <span>{name}</span>
              <span>{price}р</span>
            </div>
          ))}
        </div>
        <div className={styles['list-divider']}/>
        <div className={styles['list-total']}>
          <span>Итого:</span>
          <span>{total}р</span>
        </div>
      </div>
      {(status === orderStatuses.delivered && userRole === usersRoles.client) ? (
        <div className={styles.btn}>
          <button onClick={() => onDeliveryAccept()}>
            Подтвердить
          </button>
          <button onClick={() => onDeliveryReject()}>
            Отвергать
          </button>
        </div>
      ) : null}
      {(status === orderStatuses.created && userRole === usersRoles.client) ? (
        <div className={styles.btn}>
          <button onClick={() => onEditAddCLick()}>
            Добавить товар
          </button>
          <button onClick={() => onEditDeliveryCLick()}>
            Изменить способ получения
          </button>
          <button onClick={() => onEditPaymentCLick()}>
            Изменить данные для оплаты
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default OrderCard;