import React, {useEffect, useState} from 'react';
import DefaultList from "../../../components/list/list";
import {routes} from "../../../routes/routes";
import {IListItem} from "../../../components/listItem/listItem";
import StatusBadge from "../../../components/statusBadge/statusBadge";
import {getOrders} from "../../../api/order";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {getFeedbackList} from "../../../api/feedback";

const ClientOrdersPage = () => {
  
  const [data,setData] = useState<IListItem[]>([])
  const [filter, setFilter] = useState(false);
  const [notification, setNotification] = useState('')
  
  const handleGetAvailableFeedback = async () => {
    return await getFeedbackList()
  }
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
  
  useEffect(() => {
    handleGetAvailableFeedback().then((res) => {
      res?.length > 0
        ? res?.length === 1
          ? setNotification(`Клиенсткий представитель просит Вас оставить отзыв о заказе №${res[0]}`)
          : setNotification(`Клиенсткий представитель просит Вас оставить отзыв о заказах №${res.join(', ')}`)
        : setNotification('')
    })
  },[])
  
  const breadcrumbs = [
    {
      title: 'Заказы',
      link: routes.client.orders,
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
        notificationText={notification}
      />
    </>
  );
};

export default ClientOrdersPage;