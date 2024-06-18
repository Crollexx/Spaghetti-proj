import React from 'react';
import styles from './styles.module.scss'
import MenuButton from "../layoutMenuButton/menuButton";
import ProfileButton from "../layoutProfileButton/profileButton";
import {usersRoles} from "../../types/roles";
import {useUserData} from "../../hooks/useUserData";
import MenuIcon from "@mui/icons-material/Menu";
import {Outlet, useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes";

const Layout: React.FC = () => {

  const navigate = useNavigate()
  const { userRole, onRoleChange } = useUserData()

  const userSelected = userRole != null
  const isBrigadier = userSelected && userRole === usersRoles.brigadier

  const handleNavigate = (route: string) => {
    navigate(route)
  }

  // const handleChangeRole = () => {
  //
  // }

  const brigadierMenuList = [
    {
      title: 'Анкеты',
      value: routes.brigadier.questionnaires,
    }, {
      title: 'Заказы',
      value: routes.brigadier.orders,
    },
  ]

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {isBrigadier ? (
          <MenuButton
            id='brigadierMenu'
            listData={brigadierMenuList}
            onClick={(route) => handleNavigate(route as string)}
          >
            <MenuIcon />
          </MenuButton>
        ) : null}
        <img
          src="/logo.svg"
          alt='logo'
          className={styles.logo + ' ' + (isBrigadier ? styles.menu : '')}
          onClick={() => handleNavigate('')}
        />
        {userSelected ? (
          <ProfileButton userRole={userRole} setRole={onRoleChange}/>
        ) : null}
      </header>
      <main className={styles.content}>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;