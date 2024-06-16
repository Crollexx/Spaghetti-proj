import React from 'react';
import styles from './styles.module.scss'
import MenuButton from "../layoutMenuButton/menuButton";
import ProfileButton from "../layoutProfileButton/profileButton";
import {usersRoles} from "../../types/roles";

interface ILayoutProps {
  children: React.ReactNode
  user: IUserInfo
}

export interface IUserInfo {
  name?: string
  img?: string
  roleID: usersRoles
}
const Layout: React.FC<ILayoutProps> = ({ children, user }) => {
  
  const isBrigadier = user.roleID === usersRoles.brigadier
  
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {isBrigadier ? <MenuButton/> : null}
        <img src="/logo.svg" alt='logo' className={isBrigadier ? styles.logo : ''}/>
        <ProfileButton user={user}/>
      </header>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default Layout;