import { ISideTitleSelect } from "@/@types/types";
import Select from "../Select";
import styles from "./styles.module.scss";

export default function SideTitleSelect({
  childs,
  title,
  id,
}: ISideTitleSelect) {
  return (
    <div className={styles.sideTitleSelect}>
      <p>{title}</p>
      <Select childs={childs} id={id} name={id} key={id} text="" />
    </div>
  );
}
