import React, { useEffect, useState } from "react";

import Logo from "../../../assets/logo.png";
import Search from "../../../assets/search.svg";
import Notification from "../../../assets/notification.svg";
import Hamburguer from "../../../assets/hamburguer.svg";

import styles from "./styles.module.scss";

type MenuContextType = "open" | "closed";
type UserContextType = string | null;
type NotificationContextType = true | false;

export const Header = () => {
  const [menu, setMenu] = useState<MenuContextType>("closed");
  const [user, setUser] = useState<UserContextType>();
  const [notification, setNotification] =
    useState<NotificationContextType>(false);

  useEffect(() => {
    setUser(localStorage.getItem("profile"));
  }, [user]);

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo da plataform Kenai" />
      <nav>
        <ul>
          <li>
            <img src={Search} alt="Campo de pesquisa" />
          </li>

          <a href="#inicio">
            <li>Inicio</li>
          </a>
          <a href="#popular">
            <li>Populares</li>
          </a>
          <li className={styles.notifies}>
            <img
              onClick={() => setNotification(!notification)}
              src={Notification}
              alt=""
            />
            <div
              style={{ display: `${notification ? "block" : "none"}` }}
              className={styles.notifications}
            >
              <div className={styles.notification}>
                <p>Lorem ipsum dolor sit amet!</p>
              </div>
              <div className={styles.notification}>
                <p>Lorem ipsum dolor sit amet!</p>
              </div>
              <div className={styles.notification}>
                <p>Lorem ipsum dolor sit amet!</p>
              </div>
            </div>
          </li>
          <li>
            <a
              onClick={() => localStorage.setItem("logged", String("false"))}
              href="/"
            >
              <img src={String(user)} alt="Foto do usuário" />
            </a>
          </li>
        </ul>
        <img
          onClick={() => setMenu(menu === "open" ? "closed" : "open")}
          className={styles.hamburguer}
          src={Hamburguer}
          alt="Menu"
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
          <img src={String(user)} alt="Foto do usuário" />
          <p>Trocar de perfil</p>
        </a>
      </div>
    </header>
  );
};
