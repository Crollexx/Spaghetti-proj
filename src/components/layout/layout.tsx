import React, {useEffect, useState} from 'react';
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

  const [menu, setMenu] = useState<any>([])

  const userSelected = userRole != null
  const isBrigadier = userSelected && userRole === usersRoles.brigadier

  let dataList = []

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

  const techologinstMenuList = [
    {
      title: 'Изготовление',
      value: routes.technologist.production,
    }, {
      title: 'Заказы',
      value: routes.technologist.orders,
    },{
      title: 'Анкеты',
      value: routes.technologist.questionnaires,
    },
  ]

  useEffect(() => {
    switch (userRole) {
      case usersRoles.technologist:
        setMenu(() => techologinstMenuList)
        break
      case usersRoles.brigadier:
        setMenu(() => brigadierMenuList)
        break
      default:
        break

    }
  }, [userRole]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <MenuButton
          id='brigadierMenu'
          listData={menu}
          onClick={(route) => handleNavigate(route as string)}
        >
          <MenuIcon />
        </MenuButton>
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