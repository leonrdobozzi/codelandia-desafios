"use client";
import Image from "next/image";

import styles from "./styles.module.scss";

import OrderBanner from "../../assets/OrderBanner.png";
import { useEffect, useState } from "react";

export default function OrderSummary() {
  const [counter, setCounter] = useState(3);
  const [total, setTotal] = useState(3);
  const [discount, setDiscount] = useState(0);
  const [discountCoupon, setDiscountCoupon] = useState("");
  const itemValue = 15.22;
  const tax = 3.45;

  useEffect(() => {
    setTotal(itemValue * counter + tax - discount);
  }, [counter]);

  useEffect(() => {
    setTotal(itemValue * counter + tax - discount);
  }, [discount]);

  return (
    <div className={styles.orderSummary}>
      <h3>Resumo do pedido</h3>
      <Image src={OrderBanner} alt="Banner do item de sua compra" />
      <div className={styles.order}>
        <div className={styles.review}>
          <div className={styles.title}>
            <p>Mouse Gamer Redragon</p>
            <p>R${itemValue}</p>
          </div>
          <div className={styles.counter}>
            <button
              disabled={counter === 0 ? true : false}
              onClick={() => setCounter(counter - 1)}
            >
              -
            </button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+</button>
          </div>
        </div>
        <div className={styles.discountCoupon}>
          <input
            value={discountCoupon}
            onChange={(e) => setDiscountCoupon(e.target.value)}
            type="text"
            placeholder="Cupom de desconto"
          />
          <button
            onClick={() => {
              if (discountCoupon === "GANHE10" && counter > 1) {
                setDiscount(10);
              }
            }}
          >
            Aplicar
          </button>
        </div>
        <div className={styles.finalOrder}>
          <div className={styles.tax}>
            <p>Taxa</p>
            <p>R$3,45</p>
          </div>
          <div className={styles.delivery}>
            <p>Envio</p>
            <p className={styles.value}>Grátis</p>
          </div>
          <div className={styles.total}>
            <p>Total</p>
            <p>
              {total <= 0 + tax
                ? `Insira pelo menos um item!`
                : `R$${total.toFixed(2)}`}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
