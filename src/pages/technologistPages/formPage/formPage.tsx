import React, {useEffect, useState} from 'react';
import { IQuestionnairesData} from "../../../types/form";
import {useNavigate, useParams} from "react-router-dom";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import QuestionnaireCard from "../../../components/questionnaireCard/questionnaireCard";
import {getQuestionnaire} from "../../../api/questionnaire";

const TechnologistFormPage = () => {
  const [data, setData] = useState<null | IQuestionnairesData>(null)
  
  const navigate = useNavigate()
  const {questionnaireID} = useParams()
  
  getQuestionnaire(Number(questionnaireID))
  const handleGetQuestionnaire = async ( id: string ) => {
    
    const data: IQuestionnairesData = {
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
      link: routes.technologist.questionnaires,
    }, {
      title: 'Просмотр анкеты',
      link: routes.technologist.questionnaire(questionnaireID),
    }
  ]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      {data ? (
        <QuestionnaireCard {...data} />
      ) : null }
    </>
  );
};


export default TechnologistFormPage;