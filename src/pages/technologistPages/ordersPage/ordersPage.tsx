import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";
import OrdersTable from "../../../components/ordersTable/ordersTable";
import {ordersData} from "../../../fakeBackend/ordersData";
import {IOrder, orderStatuses} from "../../../types/order";
import {useNavigate} from "react-router-dom";

const TechnologistOrdersPage = () => {
  
  const [data, setData] = useState<IOrder[]>(ordersData)
  const navigate = useNavigate()
  
  const handleGetData = async (): Promise<IOrder[]> => {
    return ordersData
  }
  
  useEffect(() => {
    handleGetData().then((res) => setData(res))
  }, [])
  
  const breadcrumbs = [{
    title: 'Заказы',
    link: routes.technologist.orders
  }]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <OrdersTable
        data={data}
        showFilters={false}
        updateStatusAvailable={false}
        onClick={(id) => navigate('/' + routes.technologist.order(id, ))}
      />
    </>
  );
};

export default TechnologistOrdersPage;