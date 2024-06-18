import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";
import OrdersTable from "../../../components/ordersTable/ordersTable";
import {ordersData} from "../../../fakeBackend/ordersData";
import {IOrder} from "../../../types/order";
import {getOrders} from "../../../api/order";

const BrigadierOrdersPage = () => {
  
  const [data, setData] = useState<IOrder[]>(ordersData)
  
  const handleGetData = async (): Promise<IOrder[]> => {
    return await getOrders(false);
  }
  
  useEffect(() => {
    handleGetData().then((res) => setData(res))
  }, [])
  
  const breadcrumbs = [{
    title: 'Заказы',
    link: routes.brigadier.orders
  }]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <OrdersTable
        data={data}
       />
    </>
  );
};

export default BrigadierOrdersPage;