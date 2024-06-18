import React, {useEffect, useState} from 'react';
import {IListItem} from "../../../components/listItem/listItem";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import DefaultList from "../../../components/list/list";
import StatusBadge from "../../../components/statusBadge/statusBadge";
import {feedbackStatuses} from "../../../types/feedback";

const ClientRepresentativeOrderPage = () => {
  const [data,setData] = useState<IListItem[]>([])
  
  const handleGetData = async (): Promise<IListItem[]> => {
    const orders: IListItem[] = [
      {
        badge: <StatusBadge status={feedbackStatuses.requested} type='feedback'/>,
        itemID: 101
      },{
        badge: <StatusBadge status={feedbackStatuses.unset} type='feedback'/>,
        itemID: 102
      },{
        link: routes.clientRepresentative.feedback(103),
        badge: <StatusBadge status={feedbackStatuses.done} type='feedback'/>,
        itemID: 103
      },{
        badge: <StatusBadge status={feedbackStatuses.requested} type='feedback'/>,
        itemID: 104
      }, {
        link: routes.clientRepresentative.feedback(105),
        badge: <StatusBadge status={feedbackStatuses.done} type='feedback'/>,
        itemID: 105
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
      title: 'Сбор обратной связи',
      link: routes.clientRepresentative.orders,
    },
  ]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <DefaultList
        data={data}
      />
    </>
  );
};

export default ClientRepresentativeOrderPage;