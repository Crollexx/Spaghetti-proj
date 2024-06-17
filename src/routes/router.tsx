import React from 'react';
import {createBrowserRouter, Navigate, Route, RouteObject, Routes} from "react-router-dom";
import {usersRoles} from "../types/roles";
import {useUserData} from "../hooks/useUserData";
import {
  agentRoutes,
  brigadierRoutes,
  clientRepresentativeRoutes,
  clientRoutes,
  controllerRoutes, courierRoutes, defaultRoutes,
  technologistRoutes, unAuthRoutes
} from "./routes";
import Layout from "../components/layout/layout";
import BrigadierOrdersPage from "../pages/brigadierPages/ordersPage/ordersPage";
import BrigadierFormsPage from "../pages/brigadierPages/formsPage/formsPage";
import BrigadierFormItemPage from "../pages/brigadierPages/formItemPage/formItemPage";
import ClientOrdersPage from "../pages/clientPages/ordersPage/ordersPage";
import ClientOrderPage from "../pages/clientPages/orderPage/orderPage";
import ClientOrderReviewPage from "../pages/clientPages/orderReviewPage/orderReviewPage";
import ClientRepresentativeOrderReviewPage from "../pages/clientRepresentativePages/orderReviewPage/orderReviewPage";
import ClientRepresentativeOrderPage from "../pages/clientRepresentativePages/orderPage/orderPage";
import ControllerOrdersPage from "../pages/controllerPages/ordersPage/ordersPage";
import ControllerOrderPage from "../pages/controllerPages/orderPage/orderPage";
import AgentOrdersPage from "../pages/agentPages/ordersPage/ordersPage";
import TechnologistMaterialSelectionPage from "../pages/technologistPages/materialSelectionPage/materialSelectionPage";
import TechnologistFormPage from "../pages/technologistPages/formPage/formPage";
import CourierOrdersPage from "../pages/courierPages/ordersPage/ordersPage";

const Router: React.FC = () => {

  const { userRole } = useUserData()

  const getPreparedRoutes = (userID: usersRoles | null): RouteObject[] => {
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
  // const qwe = defaultRoutes(getPreparedRoutes(userRole))
  // console.log(qwe)
  // const router = createBrowserRouter(qwe);
  
  // {
  //   path: "orders",
  //     element: <BrigadierOrdersPage/>,
  // }, {
  //   path: "forms",
  //     element: <BrigadierFormsPage/>,
  //     children: [
  //     {
  //       path: ":formID",
  //       element: <BrigadierFormItemPage/>,
  //     }
  //   ]
  // }
  
  return (
    // <RouterProvider router={router} />
    <Routes>
      <Route path='/' element={<Layout/>}>
        {userRole === usersRoles.client ? (
          <>
            <Route path='' index element={<ClientOrdersPage/>}/>
            <Route path=':orderID' element={<ClientOrderPage/>}/>
            <Route path=':orderID/review' element={<ClientOrderReviewPage/>}/>
          </>
        ) : null}
        {userRole === usersRoles.clientRepresentative ? (
          <>
            <Route path='' index element={<ClientRepresentativeOrderReviewPage/>}/>
            <Route path=':reviewID' element={<ClientRepresentativeOrderPage/>}/>
          </>
        ) : null}
        {userRole === usersRoles.brigadier ? (
          <>
            <Route path='orders'  element={<BrigadierOrdersPage/>}/>
            <Route path='forms' index element={<BrigadierFormsPage/>} />
            <Route path='forms/:formID' element={<BrigadierFormItemPage/>}/>
            {/*<Route path='*' element={<Navigate to={'forms'}/> } />*/}
          </>
        ) : null}
        {userRole === usersRoles.controller ? (
          <>
            <Route path='' index element={<ControllerOrdersPage/>}/>
            <Route path=':reviewID' element={<ControllerOrderPage/>}/>
          </>
        ) : null}
        {userRole === usersRoles.agent ? (
          <>
            <Route path='' index element={<AgentOrdersPage/>}/>
            <Route path=':orderID' element={<div/>}/>
          </>
        ) : null}
        {userRole === usersRoles.technologist ? (
          <>
            <Route path='' index element={<TechnologistMaterialSelectionPage/>}/>
            <Route path=':formID' element={<TechnologistFormPage/>}/>
          </>
        ) : null}
        {userRole === usersRoles.courier ? (
          <>
            <Route path='' index element={<CourierOrdersPage/>}/>
          </>
        ) : null}
        {/*<Route path='/*' element={<Navigate to={'/'}/> } />*/}
      </Route>
    </Routes>
  );
};

export default Router;