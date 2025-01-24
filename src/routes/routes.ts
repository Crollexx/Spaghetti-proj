export const routes = {
  default: '/',
  client: {
    orders: 'orders',
    order: (orderID?: number | string) => `/${orderID ?? ':orderID'}`,
    orderEdit: (orderID?: number | string) => `/${orderID ?? ':orderID'}/edit`,
    feedback: (orderID?: number | string) => `${routes.client.order(orderID)}/feedback`,
    offers: 'offers',
    newOrder: 'new-order',
  },
  clientRepresentative: {
    orders: 'orders',
    orderList: 'orderList',
    ordersConfirm: 'ordersConfirm',
    order: (orderID?: number | string) => `${routes.clientRepresentative.orderList}/${orderID ?? ':orderID'}`, 
    feedback: (orderID?: number | string) => `/${orderID ?? ':orderID'}`
  },
  brigadier: {
    orders: 'orders',
    questionnaires: 'questionnaires',
    questionnaire: (questionnaireID?: number | string) => `/${questionnaireID ?? ':questionnaireID'}`
  },
  controller: {
    feedbackList: 'feedbackList',
    feedback: (orderID?: number | string) => `/${orderID ?? ':orderID'}`,
  },
  agent: {
    orders: 'orders',
    order: (orderID?: number | string) => `/${orderID ?? ':orderID'}`,
  },
  technologist: {
    ingridients: 'ingridients',
    material: 'material',
    orders: 'orders',
    order: (questionnaireID?: number | string) => `${routes.technologist.orders}/${questionnaireID ?? ':orderID'}`,
    production: 'production',
    questionnaires: 'questionnaires',
    questionnaire: (questionnaireID?: number | string) => `${routes.technologist.questionnaires}/${questionnaireID ?? ':questionnaireID'}`
  },
  courier: {
    orders: 'orders'
  }
}

