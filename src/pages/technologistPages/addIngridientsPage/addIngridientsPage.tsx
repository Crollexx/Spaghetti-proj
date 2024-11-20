import React from 'react';
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import ProductionCard from "../../../components/productionCard/productionCard";
import {useNavigate} from "react-router-dom";
import AddIngridientsCard from "../../../components/addIngridientsCard/addIngridientsCard";

const AddIngridientsPage = () => {

  const navigate = useNavigate();
  const breadcrumbs = [
    {
      title: 'Изготовление',
      link: routes.technologist.production,
    },
    {
      title: 'Добавление ингредиентов',
      link: routes.technologist.ingridients,
    },
  ]
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <AddIngridientsCard
        onSave={() => navigate('/'+routes.technologist.production)}
      />
    </>
  );
};

export default AddIngridientsPage;