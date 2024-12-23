import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import OrderCard from "../../../components/orderCard/orderCard";
import {IOffer, IOrder} from "../../../types/order";
import { getOffers} from "../../../api/order";
import OfferItem from "../../../components/offerItem/offerItem";
import OffersList from "../../../components/offersList/offersList";


const ClientOffersPage = () => {

  const [data, setData] = useState<IOffer[]>([])
  const navigate = useNavigate()

  const breadcrumbs = [
    {
      title: 'Просмотр предложений',
      link: routes.client.offers,
    },
  ]

  const handleGetData = async () => {
    return await getOffers()
  }

  const handleSubmit = (data: IOffer[]) => {
    navigate(`/${routes.client.newOrder}`, {
      state: data,
    })
  }

  useEffect(() => {
    handleGetData().then(res => setData(res as IOffer[]))
  }, [])

  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <OffersList data={data} onSubmit={(data) => handleSubmit(data)}/>
    </>
  )
};

export default ClientOffersPage;