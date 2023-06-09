import Image from "next/image";

import styles from "./styles.module.scss";

import Logo from "../../assets/logo.png";
import ShoppingCart from "../../assets/ShoppingCart.png";
import CaretDown from "../../assets/CaretDown.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} container`}>
        <Image src={Logo} alt="" />
        <nav>
          <ul>
            <a href="">
              <li>Início</li>
            </a>
            <a href="">
              <li>Comprar</li>
            </a>
            <a href="">
              <li>Contato</li>
            </a>
            <a href="">
              <li>Ajuda</li>
            </a>
          </ul>
        </nav>
        <div className={styles.lastMenu}>
          <div className={styles.account}>
            <p>Conta</p>
            <Image className={styles.caret} src={CaretDown} alt="Abrir" />
          </div>
          <div className={styles.cart}>
            <p>2 Items</p>
            <Image
              className={styles.shoppingCart}
              src={ShoppingCart}
              alt="Carrinho de compras"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
