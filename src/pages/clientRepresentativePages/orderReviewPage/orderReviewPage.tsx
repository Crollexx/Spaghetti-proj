import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { IFeedbackResult} from "../../../types/feedback";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import FeedbackCard from "../../../components/feedbackCard/feedbackCard";
import {getFeedbackItem} from "../../../api/feedback";

const ClientRepresentativeOrderReviewPage = () => {
  
  const [data,setData] = useState<IFeedbackResult | null>(null)
  
  const {orderID} = useParams()
  
  const handleGetOrderInfo = async (orderID: number) => {
    return await getFeedbackItem(orderID)
  }
  
  useEffect(() => {
    handleGetOrderInfo(Number(orderID)).then((res) => {
      setData(res)
    })
  },[orderID])
  
  
  const breadcrumbs = [
    {
      title: 'Сбор обратной связи',
      link: routes.clientRepresentative.orders,
    },
    {
      title: `Отзыв по заказу ${orderID}`,
      link: routes.clientRepresentative.feedback(orderID),
    }
  ]
  
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      {data ? (
        <FeedbackCard initialValues={data}  isEdit={false}/>
      ) : null}
    </>
  );
};

export default ClientRepresentativeOrderReviewPage;