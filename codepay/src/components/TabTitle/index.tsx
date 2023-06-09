import { ITabTitle } from "@/@types/types";
import styles from "./styles.module.scss";

export default function TabTitle({ title }: ITabTitle) {
  return <h3 className={styles.tabTitle}>{title}</h3>;
}
