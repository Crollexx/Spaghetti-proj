import React from 'react';
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import ProductionCard from "../../../components/productionCard/productionCard";
import {useNavigate} from "react-router-dom";

const ProductionPage = () => {

  const navigate = useNavigate();
  const breadcrumbs = [
    {
      title: 'Изготовление',
      link: routes.technologist.questionnaires,
    },
  ]
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <ProductionCard
        onAdd={() => navigate('/' + routes.technologist.ingridients)}
        onGet={() => navigate('/' + routes.technologist.material)}
        onSave={() => {}}
      />
    </>
  );
};

export default ProductionPage;