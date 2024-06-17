import React from 'react';
import styles from './styles.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {IFormData} from "../../../types/form";
import QuestionnaireCard from "../../../components/questionnaireCard/questionnaireCard";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";

const BrigadierFormItemPage: React.FC = () => {
  
  const navigate = useNavigate()

  const breadcrumbs = [
    {
     title: 'Анкеты',
     link: routes.brigadier.questionnaires,
    }, {
      title: 'Просмотр анкеты',
      link: routes.brigadier.questionnaire(),
    }
  ]
  
  const data = {} as unknown as IFormData
  
  const handleSubmit = () => {
    navigate('/forms')
  }
  
  const handleReject = () => {
    navigate('/forms')
  }
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <QuestionnaireCard {...data} />
      <div className={styles.buttons}>
        <button onClick={() => handleReject()}>
          Отклонить
        </button>
        <button onClick={() => handleSubmit()}>
          Утвердить
        </button>
      </div>
    </>
  );
};

export default BrigadierFormItemPage;