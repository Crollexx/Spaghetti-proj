import React from "react";
import { useNavigate } from "react-router-dom";
import OrderItem from "../../../components/OrderItem/OrderItem";



type Order = {
  id: number;
};

const orders: Order[] = [
  { id: 105 },
  { id: 106 },
  { id: 107 },
];

const OrderListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <div >
      <h1>Заказы, ожидающие подтверждения</h1>
      <div >
        {orders.map((order) => (
          <OrderItem
            key={order.id}
            id={order.id}
            onClick={() => navigate(`/orderList/${order.id}`)}
          />
        ))}
      </div>
      <button onClick={() => navigate(`/ordersConfirm`)}> Подтвержденные заказы</button>
    </div>
    
    </>
  );
};

export default OrderListPage;
