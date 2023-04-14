import React from "react";

import TimeCircle from "../../../assets/time_circle.png";
import { Gender } from "../Category";
import { Stars } from "../Stars";

import styles from "./styles.module.scss";

export const Highlights = () => {
  return (
    <section className={styles.highlights}>
      <Gender gender="Animação" />
      <div className={styles.rate}>
        <Stars stars={5} />
        <div className={styles.time}>
          <img src={TimeCircle} alt="" />
          <p>01h57m</p>
        </div>
      </div>
      <h2>Super Mario Bros: O filme.</h2>
      <p className={styles.description}>
        {`Mario é um encanador junto com seu irmão Luigi. Um dia, eles vão parar
        no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado pelo
        rei dos Koopas, que faz de tudo para conseguir reinar em todos os
        lugares.`}
      </p>
      <button>Assistir agora</button>
    </section>
  );
};
