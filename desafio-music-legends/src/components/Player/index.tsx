import React from "react";

import styles from "./styles.module.scss";

import Heart from "../../assets/icons/heart.svg";
import Repeat from "../../assets/icons/repeat.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import Play from "../../assets/icons/play.svg";
import Rotate from "../../assets/icons/rotate-cw.svg";

export const Player = () => {
  window.addEventListener("timeupdate", (e) => {
    console.log(e);
  });

  return (
    <section className={styles.player}>
      <div className={styles.music}>
        <div className={styles.name}>
          <h3>Warriors</h3>
          <img src={Heart} alt="" />
        </div>
        <p className={styles.author}>RIOT GAMES FT. IMAGINE DRAGONS</p>
      </div>
      <div className={styles.controls}>
        <input type="range" />
        <div className={styles.musicControl}>
          <img src={Repeat} alt="" />
          <div className={styles.principals}>
            <img src={ArrowLeft} alt="" />
            <button>
              <img src={Play} alt="" />
            </button>
            <img src={ArrowRight} alt="" />
          </div>
          <img src={Rotate} alt="" />
        </div>
      </div>
    </section>
  );
};
