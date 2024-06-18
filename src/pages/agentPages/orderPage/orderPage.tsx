import React from 'react';
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";
import FeedbackCard from "../../../components/feedbackCard/feedbackCard";
import {useParams} from "react-router-dom";
import {IFeedbackData} from "../../../types/feedback";

const AgentOrderPage = () => {
  
  const {orderID} = useParams()
  
  const values: IFeedbackData= {
    orderId: Number(orderID),
    comment: "отзыв",
    speed: 4,
    quality: 5,
    qualityBox: 2,
    impression: 3
  }
  
  
  const breadcrumbs = [
    {
      title: 'Отзывы',
      link: routes.agent.orders,
    },
    {
      title: `Отзыв по заказу ${orderID}`,
      link: routes.agent.order(orderID),
    }
  ]
  
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <FeedbackCard initialValues={values}  isEdit={false}/>
    </>
  );
};

export default AgentOrderPage;