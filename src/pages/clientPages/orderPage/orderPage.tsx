import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import OrderCard from "../../../components/orderCard/orderCard";
import {IOrder} from "../../../types/order";
import {getOrder, rejectOrderDelivery} from "../../../api/order";


const ClientOrderPage = () => {

  const [data, setData] = useState<IOrder | null>(null)

  const navigate = useNavigate()
  const {orderID} = useParams()

  const getOrderData = async (orderID: number) => {
    return await getOrder(orderID)
  }
  
  const handleApproveDelivery = async (orderID: number) => {
    await rejectOrderDelivery(orderID)
  }
  
  const handleRejectDelivery = async (orderID: number) => {
    await rejectOrderDelivery(orderID)
  }

  const handleAddFeedback = (orderID: number) => {
    navigate(routes.client.feedback(orderID))
  }

  useEffect(() => {
    if ( orderID === undefined ) {
      navigate( routes.client.orders )
    } else {
      getOrderData(Number(orderID)).then((res) => {
        setData(res)
      })
    }
  }, [navigate, orderID])

  const breadcrumbs = [
    {
      title: 'Заказы',
      link: routes.client.orders,
    },
    {
      title: 'Просмотр заказа',
      link: routes.client.order(orderID),
    }
  ]

  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      {data ? (
        <OrderCard
          onFeedbackClick={() => handleAddFeedback(Number(orderID) )}
          onDeliveryAccept={() => handleApproveDelivery(Number(orderID))}
          onDeliveryReject={() => handleRejectDelivery(Number(orderID))}
          {...data}
        />
      ) : null}
    </>
  );
};

export default ClientOrderPage;