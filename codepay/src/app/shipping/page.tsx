"use client";

import { useEffect, useState } from "react";

import { StateFromApi } from "@/@types/types";
import Input from "@/components/Input";
import Select from "@/components/Select";
import SideTitleSelect from "@/components/SideTitleSelect";
import TabTitle from "@/components/TabTitle";

import styles from "./styles.module.scss";

import { api } from "@/services/api";
import Link from "next/link";
import WayChecker from "@/components/WayChecker";
import Links from "@/components/Links";

export default function Shipping() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    api("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .get("/")
      .then((res) => res.data)
      .then((data) => {
        setStates(data);
      });
  }, []);
  return (
    <div className={`${styles.shipping} ${styles.formComponent}`}>
      <WayChecker page="shipping" />

      <TabTitle title="Detalhes do envio" />
      <div>
        <form className={styles.form}>
          <SideTitleSelect
            title="Usar endereço salvo"
            childs={["Rua dos guararupes, 123, Salvador, Bahia"]}
            id="select_address"
          />
          <div className={styles.inputs}>
            <Input
              id="cidade"
              name="Cidade"
              type="text"
              placeholder="Guaruntã"
              key="user_cidade"
            />
            <Input
              id="rua_bairro"
              name="Rua"
              type="text"
              placeholder="Rua tal, bairro tal"
              key="user_rua"
            />
            <div className={styles.numberAndState}>
              <Input
                id="numero_casa"
                name="Número"
                type="text"
                placeholder="123"
                key="user_casa_numero"
              />
              <Select
                childs={[...states.map((item: StateFromApi) => item.nome)]}
                id="select_state"
                name="select_state"
                key="select_state"
                text="Estado"
              />
            </div>
          </div>
          <Links
            text="Cancelar compra"
            buttonText="Pagamento"
            destiny="payment"
          />
        </form>
      </div>
    </div>
  );
}
