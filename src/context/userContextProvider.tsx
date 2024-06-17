import React, {useEffect, useState} from 'react';
import {IUserContext, UserContext} from "./userContext";
import {usersRoles} from "../types/roles";

interface IUserContextProvider {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<IUserContextProvider> = ({ children }) => {
  const [userRole, setUserRole] = useState<null | usersRoles>(null)

  const handleChangeUser = (value: usersRoles) => {
    setUserRole(value)
  }

  useEffect(() => {
    const user = usersRoles.client
    setUserRole(user)
  }, [])

  const contextValue: IUserContext = {
    userRole: userRole || usersRoles.client,
    onRoleChange: handleChangeUser
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;