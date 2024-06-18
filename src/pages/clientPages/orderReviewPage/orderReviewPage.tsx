import React, {useEffect} from 'react';
import FeedbackCard from "../../../components/feedbackCard/feedbackCard";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";
import {useNavigate, useParams} from "react-router-dom";
import {IFeedbackData} from "../../../types/feedback";
import {sendFeedback} from "../../../api/feedback";


const ClientOrderReviewPage = () => {
  
  const navigate = useNavigate()
  const {orderID} = useParams()
  
  const initialValues: IFeedbackData =  {
    orderId: Number(orderID),
    speed: null,
    quality: null,
    qualityBox: null,
    impression: null,
    comment: ''
  }
  
  const handleSubmit = async (values: IFeedbackData) => {
    await sendFeedback(values)
  }
  
  useEffect(() => {
    if ( orderID === undefined ) {
      navigate( '/'+routes.client.orders )
    }
  }, [navigate, orderID])
  
  const breadcrumbs = [{
    title: 'Заказы',
    link: routes.client.orders,
  }, {
    title: 'Просмотр заказа',
    link: routes.client.order(orderID),
  }, {
    title: 'Форма обратной связи',
    link: routes.client.feedback(orderID),
  }]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <FeedbackCard initialValues={initialValues} onSubmit={handleSubmit} isEdit={true}/>
    </>
  );
};

export default ClientOrderReviewPage;