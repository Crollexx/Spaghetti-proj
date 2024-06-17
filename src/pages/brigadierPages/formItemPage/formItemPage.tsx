import React from 'react';
import styles from './styles.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {IFormData} from "../../../types/form";
import QuestionnaireCard from "../../../components/questionnaireCard/questionnaireCard";

const BrigadierFormItemPage: React.FC = () => {
  
  const navigate = useNavigate()
  
  const data = {} as unknown as IFormData
  
  const handleSubmit = () => {
    navigate('/forms')
  }
  
  const handleReject = () => {
    navigate('/forms')
  }
  
  return (
    <>
      <span className={styles.breadcrumbs + ' ' + styles.text}>
        <Link to='forms' className={styles.text}>Анкеты</Link>/Просмотр анкеты
      </span>
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