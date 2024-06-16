import {useContext} from "react";
import {IUserContext, UserContext} from "../context/userContext";

export const useUserData = (): IUserContext => useContext(UserContext);