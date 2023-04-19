import React from "react";

import Logo from "../../assets/icons/logo-lol.svg";
import ArrowLeft from "../../assets/icons/small-left.svg";
import ArrowRight from "../../assets/icons/small-right.svg";

import styles from "./style.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <img className={styles.logo} src={Logo} alt="" />
      <p>RIOT GAMES</p>
      <div className={styles.bgControl}>
        <button>
          <img src={ArrowLeft} alt="" />
        </button>
        <p>1/20</p>
        <button className={styles.active}>
          <img src={ArrowRight} alt="" />
        </button>
      </div>
    </main>
  );
};
