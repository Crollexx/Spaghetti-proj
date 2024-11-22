import React from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom';

type Order = {
  id: number;
};

const orders: Order[] = [
  { id: 101 },
  { id: 102 },
  { id: 103 },
  { id: 104 },
];

const OrderConfirm: React.FC = () => {
  
  const navigate = useNavigate();

  return (
    <div >
      {orders.map((order) => (
        <div className={styles.wrapper} key={order.id} onClick={() => navigate(`/`)}>
          <span>№{order.id}</span>
          <button className={styles.processButton}>Подтвержден</button>
        </div>
      ))}
      
    </div>

  )
}

export default OrderConfirm