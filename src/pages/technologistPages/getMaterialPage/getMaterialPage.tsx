import React from 'react';
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import ProductionCard from "../../../components/productionCard/productionCard";
import {useNavigate} from "react-router-dom";
import AddIngridientsCard from "../../../components/addIngridientsCard/addIngridientsCard";
import GetMaterialCard from "../../../components/getMaterialCard/getMaterialCard";

const GetMaterialPage = () => {

  const navigate = useNavigate();
  const breadcrumbs = [
    {
      title: 'Изготовление',
      link: routes.technologist.production,
    },
    {
      title: 'Получить исходный материал',
      link: routes.technologist.ingridients,
    },
  ]
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <GetMaterialCard
        onSave={() => navigate('/' +routes.technologist.production)}
      />
    </>
  );
};

export default GetMaterialPage;