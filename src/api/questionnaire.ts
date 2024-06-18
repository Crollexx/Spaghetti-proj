import {questionnairesData} from "../fakeBackend/questionnaire";
import {IQuestionnairesData} from "../types/form";

export const getQuestionnaires = async (filter: boolean):Promise<IQuestionnairesData[]> => {
  // return await sendRequest('GET', '/questionnaire', {filter})
  
  //remove this
  return questionnairesData
}

export const getQuestionnaire = async (questionnaireID: number):Promise<IQuestionnairesData> => {
  // return await sendRequest('GET', `/questionnaire/${questionnaireID}`)
  
  //remove this
  return questionnairesData.filter(({ id }) => questionnaireID === id)[0]
}

export const acceptQuestionnaire = async (questionnaireID: number):Promise<unknown> => {
  // return await sendRequest('PUT', `/questionnaire/${questionnaireID}/approve`)
  
  //remove this
  return new Promise((resolveInner) => {
    setTimeout(resolveInner, 100);
  })
}

export const rejectQuestionnaire = async (questionnaireID: number):Promise<unknown> => {
  // return await sendRequest('PUT', `/questionnaire/${questionnaireID}/reject`)
  
  //remove this
  return new Promise((resolveInner) => {
    setTimeout(resolveInner, 100);
  })
}


export const getQuestionnairePhoto = async (path: string):Promise<unknown> => {
  // return await sendRequest('GET', `/questionnaire/photo/${path}`)
  
  //remove this
  return new Promise((resolveInner) => {
    setTimeout(resolveInner, 100);
  })
}