import React, { useState } from "react";
import styles from "./styles.module.scss";

import Star from "../../../assets/white-star.svg";
import StarYellow from "../../../assets/star.svg";
import { Gender } from "../Category";

interface ICard {
  background: string;
  title: string;
  gender: string;
}

export const Card = ({ background, title, gender }: ICard) => {
  const [stars, setStars] = useState(0);
  const [clickStars, setClickStars] = useState(0);

  const starsArray: any = [];

  for (let i = 0; i < 5; i++) {
    starsArray.push(
      <img
        key={i}
        onMouseEnter={() => (stars !== i ? setStars(i) : stars)}
        onClick={() => setClickStars(i)}
        src={(stars >= i && stars >= 0) || clickStars >= i ? StarYellow : Star}
        alt=""
      />,
    );
  }

  return (
    <section className={styles.card}>
      <div className={styles.overlay}>
        <Gender gender={gender} />
        <section onMouseLeave={() => setStars(-1)} className={styles.cardStars}>
          {starsArray}
        </section>
        <h4>{title}</h4>
      </div>
      <div className={styles.background}>
        <img src={background} alt="" />
      </div>
    </section>
  );
};
