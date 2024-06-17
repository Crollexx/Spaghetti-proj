import React from 'react';
import styles from './styles.module.scss'
import {IOrder} from "../../types/order";

interface IOrderCardProps extends IOrder {
  onFeedbackClick: () => void;
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
  onFeedbackClick,
                                              }) => {
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
          {items?.map(({name, price}) => (
            <div className={styles['list-item']}>
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

    </div>
  );
};

export default OrderCard;