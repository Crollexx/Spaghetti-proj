import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import OrderDetails from "../../../components/OrderDetails/OrderDetails";

const mockOrderDetails = {
  id: 105,
  client: "client111",
  time: "26.05, 19:43",
  pickup: "самовывоз",
  details: "Спагетти с рукколой из Фриши Джукашева",
  price: 100,
  payment: "*2202",
  packaging: "В пакете с собой",
};

const OrderDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (Number(id) == mockOrderDetails.id) {
    return <p>Заказ не найден</p>;
  }

  return (
    <OrderDetails
      {...mockOrderDetails}
      onConfirm={() => navigate("/")}
      onCancel={() => navigate("/")}
    />
  );
};

export default OrderDetailsPage;
