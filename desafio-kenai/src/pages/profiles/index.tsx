import React, { useState } from "react";
import styles from "./styles.module.scss";

import Logo from "../../assets/logo.png";
import { User } from "../../components/profiles/User";

import Profile from "../../assets/profile.png";
import Profile2 from "../../assets/profile-2.png";
import Profile3 from "../../assets/profile-3.png";
import { Button } from "../../components/profiles/Button";

export const Profiles = () => {
  const date = new Date();
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [hour, setHour] = useState(date.getHours());

  setInterval(() => {
    if (date.getMinutes() !== minutes) {
      setMinutes(date.getMinutes());
    }

    if (date.getHours() !== hour) {
      setHour(date.getHours());
    }
  }, 100);

  return (
    <section className={styles.profiles}>
      <header>
        <img src={Logo} alt="" />
        <p>
          {hour}:{String(minutes).length === 1 ? `0${minutes}` : minutes}
        </p>
      </header>
      <h1 className={styles.title}>Bem-vindo de volta ao Kenai</h1>
      <h3 className={styles.using}>Quem está usando?</h3>
      <div className={styles.users}>
        <User image={Profile} name="U1" />
        <User image={Profile2} name="U2" />
        <User image={Profile3} name="U3" />
      </div>
      <Button />
    </section>
  );
};
