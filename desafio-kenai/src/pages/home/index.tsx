import React, { useState } from "react";

import styles from "./home.module.scss";
import { Header } from "../../components/home/Header";
import { Highlights } from "../../components/home/Highlights";
import { Popular } from "../../components/home/Popular";
import { Footer } from "../../components/home/Footer";

export const HomeLayout = () => {
  const [offset, setOffset] = useState(0);

  const onScroll = () => setOffset(window.pageYOffset);
  window.removeEventListener("scroll", onScroll);
  window.addEventListener("scroll", onScroll, { passive: true });
  return (
    <div className={styles.background}>
      <div
        className={styles.blur}
        style={{ backdropFilter: `blur(${offset / 8}px)` }}
      >
        <section className={styles.container}>
          <Header />
          <Highlights />
          <Popular />
          <Footer />
        </section>
      </div>
    </div>
  );
};
