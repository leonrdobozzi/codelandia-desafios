import React, { useContext, useEffect, useState } from "react";

import Logo from "../../../assets/logo.png";
import Search from "../../../assets/search.svg";
import Notification from "../../../assets/notification.svg";
import User from "../../../assets/user.svg";
import Hamburguer from "../../../assets/hamburguer.svg";

import styles from "./styles.module.scss";

type MenuContextType = "open" | "closed";
type UserContextType = string | null;

export const Header = () => {
  const [menu, setMenu] = useState<MenuContextType>("closed");
  const [user, setUser] = useState<UserContextType>();

  useEffect(() => {
    setUser(localStorage.getItem("profile"));
  }, [user]);

  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li>
            <img src={Search} alt="" />
          </li>
          <li>Inicio</li>
          <li>Minha lista</li>
          <li>
            <img src={Notification} alt="" />
          </li>
          <li>
            <a href="/">
              <img src={String(user)} alt="" />
            </a>
          </li>
        </ul>
        <img
          onClick={() => setMenu(menu === "open" ? "closed" : "open")}
          className={styles.hamburguer}
          src={Hamburguer}
          alt=""
        />
      </nav>
      <div
        className={styles.menu}
        style={{
          left: `${menu === "closed" ? "-150%" : "0"}`,
        }}
      >
        <h1 onClick={() => setMenu(menu === "open" ? "closed" : "open")}>
          SAIR
        </h1>
        <p>tem nada aqui</p>
      </div>
    </header>
  );
};
