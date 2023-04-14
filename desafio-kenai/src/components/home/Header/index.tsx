import React from "react";

import Logo from "../../../assets/logo.png";
import Search from "../../../assets/search.svg";
import Notification from "../../../assets/notification.svg";
import User from "../../../assets/user.svg";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li>
            <img src={Search} alt="" />
          </li>
          <li>Início</li>
          <li>Minha lista</li>
          <li>
            <img src={Notification} alt="" />
          </li>
          <li>
            <img src={User} alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
