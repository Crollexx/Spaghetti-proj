import React from 'react';
import {useParams} from "react-router-dom";
import {IFeedbackData} from "../../../types/feedback";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import FeedbackCard from "../../../components/feedbackCard/feedbackCard";

const ClientRepresentativeOrderReviewPage = () => {
  
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
      <FeedbackCard initialValues={values}  isEdit={false}/>
    </>
  );
};

export default ClientRepresentativeOrderReviewPage;