import React from "react";

import Menu from "../../assets/icons/menu.svg";
import Logo from "../../assets/icons/music-legends.svg";
import Profile from "../../assets/images/profile.png";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Menu} alt="" />
      <img src={Logo} alt="" />
      <img src={Profile} alt="" />
    </header>
  );
};
