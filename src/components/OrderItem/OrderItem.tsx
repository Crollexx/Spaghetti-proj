import React from "react";
import styles from "./OrderItem.module.scss";

type OrderItemProps = {
  id: number;
  onClick: () => void;
};

const OrderItem: React.FC<OrderItemProps> = ({ id, onClick }) => {
  return (
    <div className={styles.orderItem} onClick={onClick}>
      <span>№{id}</span>
      <button className={styles.processButton}>В обработке</button>
    </div>
  );
};

export default OrderItem;
