import axios from "axios";

export const getQuestionnaire = async (orderID: string) => {
  
  const res = await axios.get("http://84.38.189.195:55971/api/v1/order")
  console.log(res)
}