import React from 'react';
import styles from './styles.module.scss'
import MenuButton from "../layoutMenuButton/menuButton";
import ProfileButton from "../layoutProfileButton/profileButton";
import {usersRoles} from "../../types/roles";
import {useUserData} from "../../hooks/useUserData";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router-dom";

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {

  // const navigate = useNavigate()
  const { userRole } = useUserData()

  const userSelected = userRole != null
  const isBrigadier = userSelected && userRole === usersRoles.brigadier

  const handleNavigate = (route: string) => {
    // navigate(route)
  }

  // const handleChangeRole = () => {
  //
  // }

  const brigadierMenuList = [
    {
      title: 'Анкеты',
      value: '/',
    }, {
      title: 'Заказы',
      value: '/orders',
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
        <img src="/logo.svg" alt='logo' className={isBrigadier ? styles.logo : ''}/>
        {userSelected ? (
          <ProfileButton userRole={userRole} />
        ) : null}
      </header>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default Layout;