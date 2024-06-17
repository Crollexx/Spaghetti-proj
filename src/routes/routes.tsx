import {Outlet, RouteObject} from "react-router-dom";
import ClientOrdersPage from "../pages/clientPages/ordersPage/ordersPage";
import ClientOrderPage from "../pages/clientPages/orderPage/orderPage";
import ClientOrderReviewPage from "../pages/clientPages/orderReviewPage/orderReviewPage";
import ClientRepresentativeOrderReviewPage from "../pages/clientRepresentativePages/orderReviewPage/orderReviewPage";
import BrigadierFormsPage from "../pages/brigadierPages/formsPage/formsPage";
import BrigadierFormItemPage from "../pages/brigadierPages/formItemPage/formItemPage";
import BrigadierOrdersPage from "../pages/brigadierPages/ordersPage/ordersPage";
import ControllerOrdersPage from "../pages/controllerPages/ordersPage/ordersPage";
import ControllerOrderPage from "../pages/controllerPages/orderPage/orderPage";
import AgentOrdersPage from "../pages/agentPages/ordersPage/ordersPage";
import TechnologistMaterialSelectionPage from "../pages/technologistPages/materialSelectionPage/materialSelectionPage";
import TechnologistFormPage from "../pages/technologistPages/formPage/formPage";
import CourierOrdersPage from "../pages/courierPages/ordersPage/ordersPage";
import React from "react";
import Layout from "../components/layout/layout";
import ClientRepresentativeOrderPage from "../pages/clientRepresentativePages/orderPage/orderPage";
import {useUserData} from "../hooks/useUserData";
import {usersRoles} from "../types/roles";

export const routes = {
  default: '/',
  client: {
    orders: '',
    order: (orderID?: number | string) => `${routes.client.orders}/${orderID ?? ':orderID'}`,
    feedback: (orderID?: number | string) => `${routes.client.order(orderID)}/feedback`
  },
  clientRepresentative: {
    orders: '',
    feedback: (orderID?: number | string) => `${routes.clientRepresentative.orders}/${orderID ?? ':orderID'}`
  },
  brigadier: {
    orders: 'orders',
    questionnaires: '',
    questionnaire: (questionnaireID?: number | string) => `${routes.brigadier.questionnaires}/${questionnaireID ?? ':questionnaireID'}`
  },
  controller: {
    feedbackList: '',
    feedback: (orderID?: number | string) => `${routes.controller.feedbackList}/${orderID ?? ':orderID'}`,
  },
  agent: {
    orders: '',
    order: (orderID?: number | string) => `${routes.agent.orders}/${orderID ?? ':orderID'}`,
  },
  technologist: {
    questionnaires: '',
    questionnaire: (questionnaireID?: number | string) => `${routes.technologist.questionnaires}/${questionnaireID ?? ':questionnaireID'}`
  },
  courier: {
    orders: ''
  }
}