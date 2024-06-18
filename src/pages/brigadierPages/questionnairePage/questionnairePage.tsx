import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {IFormData} from "../../../types/form";
import QuestionnaireCard from "../../../components/questionnaireCard/questionnaireCard";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";

const BrigadierQuestionnaireItemPage: React.FC = () => {
  
  const [data, setData] = useState<null | IFormData>(null)
  
  const navigate = useNavigate()
  const {questionnaireID} = useParams()
  
  const handleGetQuestionnaire = async ( id: string ) => {
    
    const data: IFormData = {
      id: Number(id),
      name: 'Иван',
      surname: 'Иванов',
      birthday: '2002-01-01',
      hairColor: 'Черные',
      eyeColor: 'Черные',
      height: 170,
      weight: 65,
      photo: '1.jpg',
      badHabits: [
        'Курение',
        'Употребление алкоголя'
      ]
    }
    return data
  }
  
  const handleSubmit = async () => {
    navigate('/')
  }
  
  const handleReject = async () => {
    navigate('/')
  }
  
  useEffect(() => {
    if ( questionnaireID === undefined ) {
      navigate('/')
    }
    handleGetQuestionnaire(questionnaireID as string)
      .then((res) => {
        setData(res)
      })
  }, [navigate, questionnaireID])
  
  const breadcrumbs = [
    {
      title: 'Анкеты',
      link: routes.brigadier.questionnaires,
    }, {
      title: 'Просмотр анкеты',
      link: routes.brigadier.questionnaire(),
    }
  ]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      {data ? (
        <QuestionnaireCard {...data} />
      ) : null }
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

export default BrigadierQuestionnaireItemPage;