import Image from "next/image";

import styles from "./styles.module.scss";

import Input from "@/components/Input";
import Select from "@/components/Select";
import SideTitleSelect from "@/components/SideTitleSelect";
import TabTitle from "@/components/TabTitle";

import { api } from "@/services/api";
import { StateFromApi } from "@/@types/types";
import WayChecker from "@/components/WayChecker";
import Links from "@/components/Links";

export default function Payment() {
  return (
    <>
      <WayChecker page="payment" />

      <div className={`${styles.payment} ${styles.formComponent}`}>
        <TabTitle title="Detalhes do pagamento" />
        <SideTitleSelect
          title="Usar cartão salvo"
          childs={["4459 **** **** ***7", "2316 **** **** ***8"]}
          id="select_card"
        />
        <Input
          id="nome_cartao"
          name="Nome no cartão"
          type="text"
          placeholder="Ex.: John Doe"
          key="nome_cartao"
        />
        <Input
          id="numero_cartao"
          name="Número"
          type="text"
          placeholder="1234.5678.9012.3456"
          key="numero_cartao"
        />
        <div className={styles.cardValidateData}>
          <div className={styles.expirate}>
            <label htmlFor="">Expiração</label>
            <div className={styles.expirateInputs}>
              <input
                type="text"
                placeholder="MM"
                className={styles.inputExpirate}
              />
              <p className={styles.separator}>/</p>
              <input
                type="text"
                placeholder="YY"
                className={styles.inputExpirate}
              />
            </div>
          </div>
          <Input
            id="cvc_cartao"
            name="CVC"
            type="text"
            placeholder="123"
            key="cvc_cartao"
          />
        </div>
        <Links text="Cancelar compra" buttonText="Pagar" destiny="" />
      </div>
    </>
  );
}
