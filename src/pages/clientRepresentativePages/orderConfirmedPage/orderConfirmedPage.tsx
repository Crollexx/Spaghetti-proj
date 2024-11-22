import React from 'react'
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import OrderConfirm from '../../../components/orderConfirm/orderConfirm';




const ClientRepresentativeOrderConfirmedPage = () => {

    const breadcrumbs = [
        {
          title: 'Подтвержденные заказы',
          link: routes.clientRepresentative.ordersConfirm,
        },
      ]

  return (
    <>
     <Breadcrumbs values={breadcrumbs}/>
     <OrderConfirm />
     
    </>
  )
}

export default  ClientRepresentativeOrderConfirmedPage