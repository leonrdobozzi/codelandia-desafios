import React from "react";

import Logo from "../../../assets/logo-footer.svg";
import Instagram from "../../../assets/instagram.svg";
import Facebook from "../../../assets/facebook.svg";
import Twitter from "../../../assets/twitter.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={Logo} alt="" />
      <div className={styles.socials}>
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
        <img src={Twitter} alt="" />
      </div>
    </footer>
  );
};
