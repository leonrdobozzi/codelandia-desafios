import React, { useEffect, useState } from "react";

import Logo from "../../../assets/logo.png";
import Search from "../../../assets/search.svg";
import Notification from "../../../assets/notification.svg";
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

          <a href="#inicio">
            <li>Inicio</li>
          </a>
          <a href="#popular">
            <li>Populares</li>
          </a>
          <li>
            <img src={Notification} alt="" />
          </li>
          <li>
            <a
              onClick={() => localStorage.setItem("logged", String("false"))}
              href="/"
            >
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
        <h1 onClick={() => setMenu(menu === "open" ? "closed" : "open")}>X</h1>
        <a
          onClick={() => localStorage.setItem("logged", String("false"))}
          href="/"
        >
          <img src={String(user)} alt="" />
          <p>Trocar de perfil</p>
        </a>
      </div>
    </header>
  );
};
