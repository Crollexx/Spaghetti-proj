import React, {useEffect, useState} from 'react';
import {routes} from "../../../routes/routes";
import DefaultList from "../../../components/list/list";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {IListItem} from "../../../components/listItem/listItem";
import StatusBadge from "../../../components/statusBadge/statusBadge";
import {getOrders} from "../../../api/order";

const AgentOrdersPage = () => {
  
  const [data,setData] = useState<IListItem[]>([])
  const [filter, setFilter] = useState(false);
  
  const handleGetData = async (filter: boolean): Promise<IListItem[]> => {
    const data = await getOrders(filter);

    return  data?.map(({ id, status,}) => ({
      link: routes.client.order(id),
      badge: <StatusBadge status={status} type='order'/>,
      itemID: id
    }))
  }
  
  useEffect(() => {
    handleGetData(filter).then((res) => {
      setData(res)
    })
  },[filter])
  
  const breadcrumbs = [
    {
      title: 'Заказы',
      link: routes.agent.orders,
    },
  ]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <DefaultList
        data={data}
        onSelectFilter={() => {
          setFilter(true)
        }}
        onClearFilter={() => {
          setFilter(false)
        }}
      />
    </>
  );
};

export default AgentOrdersPage;