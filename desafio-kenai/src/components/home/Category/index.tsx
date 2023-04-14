import React from "react";

import styles from "./styles.module.scss";

interface IGender {
  gender: string;
}

export const Gender = ({ gender }: IGender) => {
  return <p className={styles.gender}>{gender}</p>;
};
