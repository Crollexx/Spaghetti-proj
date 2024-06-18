import {IFeedbackData, IFeedbackResult} from "../types/feedback";
import {sendRequest} from "./index";


export const getFeedbackItem = async (orderID: number): Promise<IFeedbackResult> => {
  return await sendRequest('GET', `/feedback/${orderID}`)
}

export const sendFeedback = async (value: IFeedbackData) => {
  return await sendRequest('POST', '/feedback', value)
}

export const getFeedbackList = async ():Promise<number[]> => {
  return await sendRequest('GET', '/feedback',)
}
