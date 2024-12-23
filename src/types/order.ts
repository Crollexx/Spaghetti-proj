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

export type IOrderPaymentType = "CASH" |"CARD" | "NATURE"
export type IOrderServingType = "TOGO" | "HERE"
export type IOrderDeliveryType = "DELIVERY" | "SELF_SERVICE"
export type IOrderStatuses = "NEW"| "APPROVED"| "REJECTED"| "CLOSED"| "DONE"| "CANCELLED"| "COOKING"| "CHECKING_SOURCE"| "SOURCE_MISSING"| "READY_TO_DELIVERY"| "COURIER" | "DELIVERED"

interface IOrderq  {
  id: number,
  orderDate: string,
  deliveryBefore: string,
  status: IOrderStatuses,
  responsibleUser: string,
  deliveryType: IOrderDeliveryType,
  servingType: IOrderServingType,
  paymentType: IOrderPaymentType,
  clientFeedbackNotificationEnabled: boolean,
  clientDeliveryNotificationEnabled: boolean,
  total: number,
  commented: boolean,
  orderMenuItems: [
    {
      id: number,
      menuItem: {
        id: number,
        name: string,
        description: string,
        price: number,
        photoId: number
      },
      count: number
    }
  ]
}

export interface IOffer {
  id: number
  name: string;
  description?: string
  price: number
  photoId: number
}

export const orderAvailableStatuses = [orderStatuses.created, orderStatuses.cooking, orderStatuses.awaitDelivery, orderStatuses.inDelivery, orderStatuses.delivered, orderStatuses.done]