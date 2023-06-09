import { ISelect } from "@/@types/types";
import styles from "./styles.module.scss";

export default function Select({ childs, name, id, text }: ISelect) {
  return (
    <div className={styles.selectArea}>
      {" "}
      <label htmlFor={id}>{text}</label>
      <select name={name} id={id} className={styles.select}>
        {childs.map((child, index) => (
          <option key={index}>{child}</option>
        ))}
      </select>
    </div>
  );
}
