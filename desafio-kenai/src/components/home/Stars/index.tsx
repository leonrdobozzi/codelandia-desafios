import React, { ReactElement } from "react";
import Star from "../../../assets/star.svg";
import styles from "./styles.module.scss";

interface IStars {
  stars: number;
}

export const Stars = ({ stars }: IStars) => {
  const starList: ReactElement[] = [];

  for (let i = 0; i < stars; i++) {
    starList.push(<img key={i} src={Star} alt="" />);
  }
  return <div className={styles.stars}>{starList}</div>;
};
