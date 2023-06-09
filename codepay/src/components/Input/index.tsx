import { IInput } from "@/@types/types";
import styles from "./styles.module.scss";

export default function Input({ name, placeholder, type, id }: IInput) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{name}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}
