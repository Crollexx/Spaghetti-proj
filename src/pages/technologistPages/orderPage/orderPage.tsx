import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";
import {useNavigate, useParams} from "react-router-dom";
import OrderCard from "../../../components/orderCard/orderCard";
import {IOrder} from "../../../types/order";
import {getOrder} from "../../../api/order";

const TechnologistOrderPage = () => {
  
  const [data, setData] = useState<IOrder | null>(null)
  
  const {orderID} = useParams()
  const navigate = useNavigate()
  
  const handleGetOrderData = async (orderID: number) => {
    const data = await getOrder(orderID)
    setData(data)
  }
  
  useEffect(() => {
    if ( orderID === undefined ) {
      navigate( routes.technologist.orders )
    } else {
      handleGetOrderData(Number(orderID))
    }
  }, [navigate, orderID])
  
  const breadcrumbs = [
    {
      title: 'Заказы',
      link: routes.technologist.orders,
    },
    {
      title: `Заказ ${orderID}`,
      link: routes.technologist.order(orderID),
    }
  ]
  
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      {data ? (
        <OrderCard {...data} feedbackNotification={false}/>
      ) : null}
    </>
  );
};

export default TechnologistOrderPage;