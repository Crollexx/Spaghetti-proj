import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import { IQuestionnairesData} from "../../../types/form";
import QuestionnaireCard from "../../../components/questionnaireCard/questionnaireCard";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {routes} from "../../../routes/routes";
import {acceptQuestionnaire, getQuestionnaire, rejectQuestionnaire} from "../../../api/questionnaire";

const BrigadierQuestionnaireItemPage: React.FC = () => {
  
  const [data, setData] = useState<null | IQuestionnairesData>(null)
  
  const navigate = useNavigate()
  const {questionnaireID} = useParams()
  
  const handleGetQuestionnaire = async ( id: number ) => {
    return await getQuestionnaire(id)
  }
  
  const handleSubmit = async (id: number) => {
    await acceptQuestionnaire(id).then(() => {
      navigate('/')
    })
  }
  
  const handleReject = async (id: number) => {
    await rejectQuestionnaire(id).then(() => {
      navigate('/')
    })
  }
  
  useEffect(() => {
    if ( questionnaireID === undefined ) {
      navigate('/')
    }
    handleGetQuestionnaire(Number(questionnaireID))
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
        <button onClick={() => handleReject(Number(questionnaireID))}>
          Отклонить
        </button>
        <button onClick={() => handleSubmit(Number(questionnaireID))}>
          Утвердить
        </button>
      </div>
    </>
  );
};

export default BrigadierQuestionnaireItemPage;