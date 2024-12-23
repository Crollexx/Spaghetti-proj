import {IOrder, orderStatuses} from "../types/order";
import {offersData, ordersData} from "../fakeBackend/ordersData";
import {sendRequest} from "./index";


export const getOrders = async (filter: boolean):Promise<IOrder[]> => {
  // return await sendRequest('GET', '/order', {filter})
  
  //remove this
  return ordersData
}

export const getOrder = async (orderID: number):Promise<IOrder> => {
  // return await sendRequest('GET', `/order/${orderID}`)
  
  //remove this
  return ordersData.filter(({ id }) => orderID === id)[0]
}

export const changeOrderStatus = (orderID: number, status: orderStatuses): Promise<unknown> => {
  // return await sendRequest('PUT', `/order/status/${orderID}`)
  
  return new Promise((resolveInner) => {
    setTimeout(resolveInner, 100);
  })
}

export const confirmOrderDelivery = async (orderID: number): Promise<unknown> => {
  // return await sendRequest('PUT', `/order/delivery/approve/${orderID}`)
  
  return new Promise((resolveInner) => {
    setTimeout(resolveInner, 100);
  })
}

export const rejectOrderDelivery = (orderID: number): Promise<unknown> => {
  // return await sendRequest('PUT', `/order/delivery/reject/${orderID}`)
  
  return new Promise((resolveInner) => {
    setTimeout(resolveInner, 100);
  })
}

export const getOffers = async ():Promise<unknown> => {
  // return await sendRequest('GET', `/menu`)

  //remove this
  return offersData
}

export const getOfferImage = async (imageID: number ):Promise<string> => {
  // return await sendRequest('GET', `/questionnaire/photo/${imageID}`)

  //remove this
  return offersData?.filter(({ id }) => id === imageID)[0]?.image
}

export const submitNewOrder = async (data: unknown):Promise<unknown> => {
  // return await sendRequest('POST', `/order`, data)

  //remove this
  return new Promise((resolveInner, reject) => {
    resolveInner('fd')
  })
}