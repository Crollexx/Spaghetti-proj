import axios from "axios";

export const getOrders = async () => {
  
  
  await fetch('http://84.38.189.195:55971/api/v1/order', {
    method: 'GET',
    mode: 'no-cors'
  }).then(response => response.json()).then(data => console.log(data))
  
  const res = await axios.get("http://84.38.189.195:55971/api/v1/order", {
    withCredentials: true,
  })
  console.log(res)
}