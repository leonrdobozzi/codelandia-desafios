import React, { useState } from "react";

import styles from "./home.module.scss";
import { Header } from "../../components/home/Header";
import { Highlights } from "../../components/home/Highlights";
import { Popular } from "../../components/home/Popular";

export const HomeLayout = () => {
  const [offset, setOffset] = useState(0);

  const onScroll = () => setOffset(window.pageYOffset);
  window.removeEventListener("scroll", onScroll);

  return (
    <div className={styles.background}>
      <section
        style={{ backdropFilter: `blur(${offset / 8}px)` }}
        className={styles.container}
      >
        <Header />
        <Highlights />
        <Popular />
      </section>
    </div>
  );
};
