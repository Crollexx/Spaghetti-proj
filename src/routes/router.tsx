import React from 'react';
import {createBrowserRouter, Navigate, Route, RouteObject, Routes} from "react-router-dom";
import {usersRoles} from "../types/roles";
import {useUserData} from "../hooks/useUserData";
import Layout from "../components/layout/layout";
import BrigadierOrdersPage from "../pages/brigadierPages/ordersPage/ordersPage";
import BrigadierQuestionnairesPage from "../pages/brigadierPages/questionnairesPage/questionnairesPage";
import BrigadierQuestionnaireItemPage from "../pages/brigadierPages/questionnairePage/questionnairePage";
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
import {routes} from "./routes";
import AgentOrderPage from "../pages/agentPages/orderPage/orderPage";
import ProductionPage from "../pages/technologistPages/productionPage/productionPage";
import AddIngridientsPage from "../pages/technologistPages/addIngridientsPage/addIngridientsPage";
import GetMaterialPage from "../pages/technologistPages/getMaterialPage/getMaterialPage";
import TechnologistOrdersPage from "../pages/technologistPages/ordersPage/ordersPage";
import OrderListPage from "../pages/clientRepresentativePages/OrderListPage/OrderListPage";
import OrderDetailsPage from "../pages/clientRepresentativePages/OrderDetailsPage/OrderDetailsPage";
import ClientRepresentativeOrderConfirmedPage from "../pages/clientRepresentativePages/orderConfirmedPage/orderConfirmedPage";
import ClientOffersPage from "../pages/clientPages/offersPage/offersPage";
import ClientNewOrderPage from "../pages/clientPages/newOrderPage/newOrderPage";
import ClientEditOrderPage from "../pages/clientPages/orderEditPage/orderPage";
import TechnologistOrderPage from "../pages/technologistPages/orderPage/orderPage";
const Router: React.FC = () => {

  const { userRole } = useUserData()

  // const getPreparedRoutes = (userID: usersRoles | null): RouteObject[] => {
  //   switch (userID) {
  //     case usersRoles.client:
  //       return clientRoutes
  //     case usersRoles.clientRepresentative:
  //       return clientRepresentativeRoutes
  //     case usersRoles.brigadier:
  //       return brigadierRoutes
  //     case usersRoles.controller:
  //       return controllerRoutes
  //     case usersRoles.agent:
  //       return agentRoutes
  //     case usersRoles.technologist:
  //       return technologistRoutes
  //     case usersRoles.courier:
  //       return courierRoutes
  //     default:
  //       return unAuthRoutes
  //   }
  // }
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
      <Route path={routes.default} element={<Layout/>}>
        {userRole === usersRoles.client ? (
          <>
            <Route path={routes.client.orders} index element={<ClientOrdersPage/>}/>
            <Route path={routes.client.order()} element={<ClientOrderPage/>}/>
            <Route path={routes.client.orderEdit()} element={<ClientEditOrderPage/>}/>
            <Route path={routes.client.feedback() } element={<ClientOrderReviewPage/>}/>
            <Route path={routes.client.offers } element={<ClientOffersPage/>}/>
            <Route path={routes.client.newOrder } element={<ClientNewOrderPage/>}/>

            <Route path='*' element={<Navigate to={routes.client.orders}/> } />
          </>
        ) : null}
        {userRole === usersRoles.clientRepresentative ? (
          <>
            <Route path={routes.clientRepresentative.orderList} index element={<ClientRepresentativeOrderReviewPage/>}/>
            <Route path={routes.clientRepresentative.feedback()} element={<ClientRepresentativeOrderPage/>}/>
            <Route path={routes.clientRepresentative.orders} index element={<OrderListPage />}/>    
            <Route path={routes.clientRepresentative.order()} element={<OrderDetailsPage />}/>
            <Route path={routes.clientRepresentative.ordersConfirm} index element={<ClientRepresentativeOrderConfirmedPage />} />

            <Route path='*' element={<Navigate to={routes.clientRepresentative.orders}/> } />
          </>
        ) : null}
        {userRole === usersRoles.brigadier ? (
          <>
            <Route path={routes.brigadier.orders}  element={<BrigadierOrdersPage/>}/>
            <Route path={routes.brigadier.questionnaires} index element={<BrigadierQuestionnairesPage/>} />
            <Route path={routes.brigadier.questionnaire()} element={<BrigadierQuestionnaireItemPage/>}/>

            <Route path='*' element={<Navigate to={routes.brigadier.questionnaires}/> } />
          </>
        ) : null}
        {userRole === usersRoles.controller ? (
          <>
            <Route path={routes.controller.feedbackList} index element={<ControllerOrdersPage/>}/>
            <Route path={routes.controller.feedback()} element={<ControllerOrderPage/>}/>

            <Route path='*' element={<Navigate to={routes.controller.feedbackList}/> } />
          </>
        ) : null}
        {userRole === usersRoles.agent ? (
          <>
            <Route path={routes.agent.orders} index element={<AgentOrdersPage/>}/>
            <Route path={routes.agent.order()}  element={<AgentOrderPage/>}/>

            <Route path='*' element={<Navigate to={routes.agent.orders}/> } />
          </>
        ) : null}
        {userRole === usersRoles.technologist ? (
          <>
            <Route path={routes.technologist.questionnaires} index element={<TechnologistMaterialSelectionPage/>}/>
            <Route path={routes.technologist.questionnaire()} element={<TechnologistFormPage/>}/>


            <Route path={routes.technologist.production} element={<ProductionPage/>}/>
            <Route path={routes.technologist.ingridients} element={<AddIngridientsPage/>}/>
            <Route path={routes.technologist.material} element={<GetMaterialPage/>}/>

            <Route path={routes.technologist.order()} index element={<TechnologistOrderPage/>}/>
            <Route path={routes.technologist.orders} index element={<TechnologistOrdersPage/>}/>

            <Route path='*' element={<Navigate to={routes.technologist.questionnaires}/> } />
          </>
        ) : null}
        {userRole === usersRoles.courier ? (
          <>
            <Route path={routes.courier.orders} index element={<CourierOrdersPage/>}/>

            <Route path='*' element={<Navigate to={routes.courier.orders}/> } />
          </>
        ) : null}
        <Route path='*' element={<Navigate to={'/'}/> } />
      </Route>
    </Routes>
  );
};

export default Router;