import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";
import OrdersTable from "../../../components/ordersTable/ordersTable";
import {ordersData} from "../../../fakeBackend/ordersData";
import {IOrder, orderStatuses} from "../../../types/order";

const CourierOrdersPage = () => {
  
  const [data, setData] = useState<IOrder[]>(ordersData)
  
  const handleGetData = async (): Promise<IOrder[]> => {
    return ordersData
  }
  
  const handleChangeStatus = async (value: orderStatuses, orderID: number) => {
    const index  = ordersData.findIndex(({id}) => id === orderID)
    ordersData[index].status = value
    setData(ordersData)
  }
  
  const handleFilter = (filter:orderStatuses, data: IOrder[]) => {
    const preparedData = data.filter(({status}) => {
      if (filter as string === 'reset') {
        return true
      } else {
        return status === filter
      }
    })
    setData(preparedData)
  }
  
  useEffect(() => {
    handleGetData().then((res) => setData(res))
  }, [])
  
  const breadcrumbs = [{
    title: 'Заказы',
    link: routes.courier.orders
  }]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <OrdersTable
        data={data}
        showFilters={true}
        onFilter={(filter) => handleFilter(filter, ordersData)}
        onUpdateStatus={handleChangeStatus}
        updateStatusAvailable={true}
      />
    </>
  );
};

export default CourierOrdersPage;