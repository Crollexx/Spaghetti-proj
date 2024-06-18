import React, {useEffect, useState} from 'react';
import {IListItem} from "../../../components/listItem/listItem";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import DefaultList from "../../../components/list/list";

const ControllerOrdersPage = () => {
  const [data,setData] = useState<IListItem[]>([])
  
  const handleGetData = async (): Promise<IListItem[]> => {
    const orders: IListItem[] = [
      {
        link: routes.controller.feedback(101),
        itemID: 101
      },{
        link: routes.controller.feedback(102),
        itemID: 102
      },{
        link: routes.controller.feedback(103),
        itemID: 103
      },{
        link: routes.controller.feedback(104),
        itemID: 104
      }, {
        link: routes.controller.feedback(105),
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
      title: 'Отзывы',
      link: routes.controller.feedbackList,
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

export default ControllerOrdersPage;