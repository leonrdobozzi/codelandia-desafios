import React from "react";
import { Card } from "../Card";
import styles from "./styles.module.scss";

import Loki from "../../../assets/loki.png";
import Shangchi from "../../../assets/shang-chi.png";
import TheWitcher from "../../../assets/the-witcher.png";

export const Popular = () => {
  return (
    <section className={styles.popular}>
      <h3>Populares</h3>
      <div className={styles.cards}>
        <Card background={Shangchi} title="Shang-Chi" gender="Aventura" />
        <Card background={Loki} title="Loki" gender="Aventura" />
        <Card background={TheWitcher} title="The Witcher" gender="Magia" />
      </div>
    </section>
  );
};
