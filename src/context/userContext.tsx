import React from "react";
import {usersRoles} from "../types/roles";

export interface IUserContext {
  userRole: usersRoles | null,
  onRoleChange: (value: usersRoles) => void
}

export const UserContext = React.createContext<IUserContext>({
  userRole: null,
  onRoleChange: (value: usersRoles) => {}
});