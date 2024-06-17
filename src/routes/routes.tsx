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

export const defaultRoutes = (routes: RouteObject[]): RouteObject[] => [
  {
    path: "/",
    element: <Layout/>,
    errorElement: <div>Ошибка</div>,
    children: routes,
  },
]


export const unAuthRoutes: RouteObject[] = [
  {
    path: "error",
    element: <div>Ошибка</div>,
  },
]

export const clientRoutes: RouteObject[] = [
  {
    path: "order",
    element: <ClientOrdersPage/>,
    children: [
      {
        path: ":orderID",
        element: <ClientOrderPage/>,
        children: [
          {
            path: "review",
            element: <ClientOrderReviewPage/>,
          },
        ]
      }
    ]
  },
]

export const clientRepresentativeRoutes: RouteObject[] = [
  {
    path: "orders",
    element: <ClientRepresentativeOrderReviewPage/>,
    children: [
      {
        path: ":reviewID",
        element: <ClientRepresentativeOrderPage/>,
      },
    ]
  },
]

export const brigadierRoutes: RouteObject[] = [
  {
    path: "orders",
    element: <BrigadierOrdersPage/>,
  }, {
    path: "forms",
    element: <BrigadierFormsPage/>,
    children: [
      {
        path: ":formID",
        element: <BrigadierFormItemPage/>,
      }
    ]
  }
]

export const controllerRoutes: RouteObject[] = [
  {
    path: "review",
    element: <ControllerOrdersPage/>,
    children: [
      {
        path: ":reviewID",
        element: <ControllerOrderPage/>,
      }
    ]
  }
]
export const agentRoutes: RouteObject[] = [
  {
    path: "orders",
    element: <AgentOrdersPage/>,
    children: [
    
    ]
  },
]
export const technologistRoutes: RouteObject[] = [
  {
    path: "selection",
    element: <TechnologistMaterialSelectionPage/>,
    children: [
      {
        path: ":formID",
        element: <TechnologistFormPage/>,
      },
    ]
  }
]
export const courierRoutes: RouteObject[] = [
  {
    path: "orders",
    element: <CourierOrdersPage/>,
  },
]
