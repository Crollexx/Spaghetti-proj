import {IFeedbackData, IFeedbackResult} from "../types/feedback";
import {sendRequest} from "./index";


export const getFeedbackItem = async (orderID: number): Promise<IFeedbackResult> => {
  return await sendRequest('POST', `/feedback/${orderID}`)
}

export const sendFeedback = async (value: IFeedbackData) => {
  // return await sendRequest('POST', '/feedback', {data: IFeedbackData})
  console.log(value)
}

export const getFeedbackList = async ():Promise<number[]> => {
  // return await sendRequest('GET', '/feedback',)
  
  //remove this
  return [1,2,3]
}
