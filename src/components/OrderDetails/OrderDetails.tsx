import React from "react";
import styles from "./OrderDetails.module.scss";

type OrderDetailsProps = {
  id: number;
  client: string;
  time: string;
  pickup: string;
  details: string;
  price: number;
  payment: string;
  packaging: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const OrderDetails: React.FC<OrderDetailsProps> = ({
  id,
  client,
  time,
  pickup,
  details,
  price,
  payment,
  packaging,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.orderDetails}>
      <h1>Просмотр заказа</h1>
      
      <button className={styles.contactButton} onClick={() => {}}>
        Связаться
      </button>
      
      <p>Заказ №{id}</p>
      <p>Клиент: {client}</p>
      <p>Время заказа: {time}</p>
      <p>Получение: {pickup}</p>
      <p>Детали заказа: {details}</p>
      <p>Сервировка: {packaging}</p>
      <p>Оплата: {payment}</p>
      
      <hr />
      
      <p className={styles.price}>ИТОГО: {price} р</p>
      
      <div className={styles.buttonsContainer}>
        <button className={styles.confirmButton} onClick={onConfirm}>
          Подтвердить заказ
        </button>
        <button className={styles.cancelButton} onClick={onCancel}>
          Отменить заказ
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
