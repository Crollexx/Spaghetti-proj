import React, {useEffect, useState} from 'react';
import {routes} from "../../../routes/routes";
import DefaultList from "../../../components/list/list";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {IListItem} from "../../../components/listItem/listItem";
import StatusBadge from "../../../components/statusBadge/statusBadge";
import {orderStatuses} from "../../../types/order";

const AgentOrdersPage = () => {
  
  const [data,setData] = useState<IListItem[]>([])
  
  const handleGetData = async (): Promise<IListItem[]> => {
    const orders: IListItem[] = [
      {
        link: routes.client.order(101),
        badge: <StatusBadge status={orderStatuses.delivered} type='order'/>,
        itemID: '101'
      },{
        link: routes.client.order(102),
        badge: <StatusBadge status={orderStatuses.cooking} type='order'/>,
        itemID: '102'
      },{
        link: routes.client.order(103),
        badge: <StatusBadge status={orderStatuses.done} type='order'/>,
        itemID: '103'
      },{
        link: routes.client.order(104),
        badge: <StatusBadge status={orderStatuses.created} type='order'/>,
        itemID: '104'
      }, {
        link: routes.client.order(105),
        badge: <StatusBadge status={orderStatuses.awaitDelivery} type='order'/>,
        itemID: '105'
      },
    ]
    return orders
  }
  
  useEffect(() => {
    handleGetData().then((res) => {
      setData(res)
    })
    
  },[])
  
  const breadcrumbs = [
    {
      title: 'Отзывы',
      link: routes.agent.orders,
    },
  ]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <DefaultList
        data={data}
        onSelectFilter={() => {
        }}
        onClearFilter={() => {
        }}
      />
    </>
  );
};

export default AgentOrdersPage;