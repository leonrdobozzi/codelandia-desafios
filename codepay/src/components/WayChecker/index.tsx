import Image from "next/image";

import Check from "@/assets/Check.png";
import Uncheck from "@/assets/Unchecked.png";

import styles from "./styles.module.scss";
import Link from "next/link";
import { IWayChecker } from "@/@types/types";

export default function WayChecker({ page }: IWayChecker) {
  console.log();
  return (
    <div className={styles.wayChecker}>
      <Link className={styles.link} href="/login">
        <p style={{ color: "#2fbd6a" }}>Conta</p>
      </Link>
      <div className={styles.line} style={{ backgroundColor: "#2fbd6a" }} />
      <Image
        src={page === "shipping" || page === "payment" ? Check : Uncheck}
        alt=""
      />
      <div
        className={styles.line}
        style={{
          backgroundColor: `${
            page === "shipping" || page === "payment" ? "#2fbd6a" : "4a5568"
          }`,
        }}
      />
      <Link className={styles.link} href="/shipping">
        <p
          style={{
            color: `${
              page === "shipping" || page === "payment" ? "#2fbd6a" : "#4a5568"
            }`,
          }}
        >
          Envio
        </p>
      </Link>
      <div
        className={styles.line}
        style={{
          backgroundColor: `${
            page === "shipping" || page === "payment" ? "#2fbd6a" : "4a5568"
          }`,
        }}
      />
      <Image src={page === "payment" ? Check : Uncheck} alt="" />
      <div
        className={styles.line}
        style={{
          backgroundColor: `${page === "payment" ? "#2fbd6a" : "4a5568"}`,
        }}
      />
      <Link className={styles.link} href="/payment">
        <p
          style={{
            color: `${page === "payment" ? "#2fbd6a" : "#4a5568"}`,
          }}
        >
          Pagamento
        </p>
      </Link>
    </div>
  );
}
