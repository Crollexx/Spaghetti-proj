import {sendRequest} from "./index";

export const acceptQuestionnaireByTechnologist = async (queID: number[], date: string):Promise<unknown> => {
  // return await sendRequest('POST', `/people`, {
  //   date: date,
  //   questionnaireIds: queID
  // })
  
  //remove this
  return new Promise((resolveInner) => {
    setTimeout(resolveInner, 100);
  })
}