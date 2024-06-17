import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import OrderCard from "../../../components/orderCard/orderCard";
import {IOrder, orderStatuses} from "../../../types/order";
import {ordersData} from "../../../fakeBackend/ordersData";


const ClientOrderPage = () => {

  const [data, setData] = useState<IOrder | null>(null)

  const navigate = useNavigate()
  const {orderID} = useParams()

  const getOrderData = (orderID: string) => {
    const preparedData = ordersData.find(
      ({id }) => id === Number(orderID)
    )
    setData(preparedData ?? null)
  }

  const handleAddFeedback = (orderID: string) => {
    navigate(routes.client.feedback(orderID))
  }

  useEffect(() => {

    if ( orderID === undefined ) {
      navigate( routes.client.orders )
    } else {
      getOrderData(orderID)
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
          onFeedbackClick={() => handleAddFeedback(orderID as string)}
          {...data}
        />
      ) : null}
    </>
  );
};

export default ClientOrderPage;