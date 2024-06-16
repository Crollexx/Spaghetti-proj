export enum orderStatuses {
  created = 'NEW',
  cooking = 'COOKING',
  awaitDelivery = 'READY_TO_DELIVERY',
  inDelivery = 'COURIER',
  delivered = 'DELIVERED',
  done = 'DONE',
}

interface IOrderPosition {
  id: number,
  name: string,
  description: string,
  price: number,
  count: number
}

export interface IOrder  {
  id: number,
  orderDate: string,
  deliveryDate: string,
  status: orderStatuses,
  user: string,
  deliveryType: string,
  servingType: string,
  paymentType: string,
  deliveryNotification: boolean,
  feedbackNotification: boolean,
  items: IOrderPosition[],
  total: number
}