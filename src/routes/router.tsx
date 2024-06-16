import React from 'react';
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {IUserInfo} from "../components/layout/layout";
import {usersRoles} from "../types/roles";
import AgentOrdersPage from "../pages/agentPages/ordersPage/ordersPage";
import BrigadierFormItemPage from "../pages/brigadierPages/formItemPage/formItemPage";
import BrigadierFormsPage from "../pages/brigadierPages/formsPage/formsPage";
import BrigadierOrdersPage from "../pages/brigadierPages/ordersPage/ordersPage";
import ClientOrderPage from "../pages/clientPages/orderPage/orderPage";
import ClientOrderReviewPage from "../pages/clientPages/orderReviewPage/orderReviewPage";
import ClientOrdersPage from "../pages/clientPages/ordersPage/ordersPage";
import ClientRepresentativeOrderReviewPage from "../pages/clientRepresentativePages/orderReviewPage/orderReviewPage";
import ControllerOrderPage from "../pages/controllerPages/orderPage/orderPage";
import ControllerOrdersPage from "../pages/controllerPages/ordersPage/ordersPage";
import CourierOrdersPage from "../pages/courierPages/ordersPage/ordersPage";
import TechnologistMaterialSelectionPage from "../pages/technologistPages/materialSelectionPage/materialSelectionPage";
import TechnologistFormPage from "../pages/technologistPages/formPage/formPage";

interface IRouterProps {   user: IUserInfo}
const Router: React.FC<IRouterProps> = ({user}) => {
  
  const unAuthRoutes: RouteObject[] = [
    {
      path: "/",
      element: <div>Ошибка</div>,
    },
  ]
  
  const clientRoutes: RouteObject[] = [
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
  
  const clientRepresentativeRoutes: RouteObject[] = [
    {
      path: "/",
      element: <ClientRepresentativeOrderReviewPage/>,
    },
  ]
  
  const brigadierRoutes: RouteObject[] = [
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
  
  const controllerRoutes: RouteObject[] = [
    {
      path: "/",
      element: <ControllerOrdersPage/>,
    }, {
      path: "/:reviewID",
      element: <ControllerOrderPage/>,
    },
  ]
  const agentRoutes: RouteObject[] = [
    {
      path: "/",
      element: <AgentOrdersPage/>,
    },
  ]
  const technologistRoutes: RouteObject[] = [
    {
      path: "/",
      element: <TechnologistMaterialSelectionPage/>,
    }, {
      path: "/:formID",
      element: <TechnologistFormPage/>,
    },
  ]
  const courierRoutes: RouteObject[] = [
    {
      path: "/",
      element: <CourierOrdersPage/>,
    },
  ]
  
  const getPreparedRoutes = (userID?: number): RouteObject[] => {
    switch (userID) {
      case usersRoles.client:
        return clientRoutes
      case usersRoles.clientRepresentative:
        return clientRepresentativeRoutes
      case usersRoles.brigadier:
        return brigadierRoutes
      case usersRoles.controller:
        return controllerRoutes
      case usersRoles.agent:
        return agentRoutes
      case usersRoles.technologist:
        return technologistRoutes
      case usersRoles.courier:
        return courierRoutes
      default:
        return unAuthRoutes
    }
  }
  
  const router = createBrowserRouter(getPreparedRoutes(user?.roleID));
  
  return (
    <RouterProvider router={router} />
  );
};

export default Router;