import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {IOffer} from "../../../types/order";
import NewOrderCard from "../../../components/newOrderCard/newOrderCard";
import {submitNewOrder} from "../../../api/order";
import NotificationCard from "../../../components/notificationCard/notificationCard";


const ClientNewOrderPage = () => {

  const [data, setData] = useState<IOffer[]>([])
  const [result, setResult] = useState<boolean | null>(null)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setData(location?.state)
  }, [])

  const breadcrumbs = [
    {
      title: 'Оформление заказа',
      link: routes.client.newOrder,
    },
  ]

  const handleSubmit = (data: any) => {
    submitNewOrder(data).then(() => {
      setResult(true)
    }).catch(() => {
      setResult(false)
    }).finally(() => {
      setTimeout(() => {
        navigate('/' + routes.client.orders)
        setResult(null)
      }, 5000)
    })
  }

  const handleRemoveNotification = () => {
    setResult(null)
  }

  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <NotificationCard
        onClick={() => handleRemoveNotification()}
        isOpen={result != null}
        type={result ? 'success' : 'error'}
        text={result
          ? 'Заказ успешно создан'
          : 'Во время оформления заказа произошла ошибка. Попробуйте снова!'}
      />
      <NewOrderCard onSubmit={(data) => handleSubmit(data)} data={data}/>
    </>
  );
};

export default ClientNewOrderPage;