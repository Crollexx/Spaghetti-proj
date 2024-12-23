import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import OrderCard from "../../../components/orderCard/orderCard";
import {IOrder} from "../../../types/order";
import {getOrder, rejectOrderDelivery} from "../../../api/order";
import NotificationCard from "../../../components/notificationCard/notificationCard";


const ClientEditOrderPage = () => {

  const [data, setData] = useState<IOrder | null>(null)
  const [result, setResult] = useState<boolean | null>(null)

  const navigate = useNavigate()
  const {orderID} = useParams()

  const getOrderData = async (orderID: number) => {
    return await getOrder(orderID)
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

  const handleRemoveNotification = () => {
    setResult(null)
  }

  const handleShowNotification = () => {
    setResult(true)
  }

  const breadcrumbs = [
    {
      title: 'Заказы',
      link: routes.client.orders,
    },
    {
      title: 'Редактирование заказа',
      link: routes.client.order(orderID),
    }
  ]

  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      {data ? (
        <OrderCard
          editAvailable={true}
          onEditAddCLick={() => handleShowNotification()}
          onEditPaymentCLick={() => handleShowNotification()}
          onEditDeliveryCLick={() => handleShowNotification()}
          {...data}
        />
      ) : null}
      <NotificationCard
        onClick={() => handleRemoveNotification()}
        isOpen={result != null}
        type='error'
        text='Заказ невозможно редактировать! Проверьте статус заказа'
      />
    </>
  );
};

export default ClientEditOrderPage;