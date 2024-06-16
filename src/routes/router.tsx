import React from 'react';
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {usersRoles} from "../types/roles";
import {useUserData} from "../hooks/useUserData";
import {
  agentRoutes,
  brigadierRoutes,
  clientRepresentativeRoutes,
  clientRoutes,
  controllerRoutes, courierRoutes,
  technologistRoutes, unAuthRoutes
} from "./routes";

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
  
  const router = createBrowserRouter(getPreparedRoutes(userRole));
  
  return (
    <RouterProvider router={router} />
  );
};

export default Router;