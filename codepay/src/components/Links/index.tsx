import Link from "next/link";

import styles from "./styles.module.scss";
import { ILinks } from "@/@types/types";

export default function Links({ text, destiny, buttonText }: ILinks) {
  return (
    <div className={styles.links}>
      <a href="">{text}</a>
      <Link href={`/${destiny}`}>
        <button>{buttonText}</button>
      </Link>
    </div>
  );
}
