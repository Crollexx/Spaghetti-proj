import {RouteObject} from "react-router-dom";
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

export const unAuthRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Ошибка</div>,
  },
]

export const clientRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ClientOrdersPage/>,
  }, {
    path: "/:orderID",
    element: <ClientOrderPage/>,
  }, {
    path: "/:orderID/review",
    element: <ClientOrderReviewPage/>,
  },
]

export const clientRepresentativeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ClientRepresentativeOrderReviewPage/>,
  },
]

export const brigadierRoutes: RouteObject[] = [
  {
    path: "/",
    element: <BrigadierFormsPage/>,
  }, {
    path: "/:formID",
    element: <BrigadierFormItemPage/>,
  }, {
    path: "/orders",
    element: <BrigadierOrdersPage/>,
  },
]

export const controllerRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ControllerOrdersPage/>,
  }, {
    path: "/:reviewID",
    element: <ControllerOrderPage/>,
  },
]
export const agentRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AgentOrdersPage/>,
  },
]
export const technologistRoutes: RouteObject[] = [
  {
    path: "/",
    element: <TechnologistMaterialSelectionPage/>,
  }, {
    path: "/:formID",
    element: <TechnologistFormPage/>,
  },
]
export const courierRoutes: RouteObject[] = [
  {
    path: "/",
    element: <CourierOrdersPage/>,
  },
]
