import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

interface IUser {
  image: string;
  name: string;
}

export const User = ({ image, name }: IUser) => {
  const [profile, setProfile] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    localStorage.setItem("profile", profile);
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("logged", String(logged));
  }, [logged]);

  return (
    <div
      onClick={() => {
        setProfile(image);
        setLogged(true);
        window.location.href = "/";
      }}
      className={styles.user}
    >
      <img src={image} alt="" />
      <h4>{name}</h4>
    </div>
  );
};
