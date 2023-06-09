import Input from "@/components/Input";
import TabTitle from "@/components/TabTitle";

import styles from "./styles.module.scss";
import WayChecker from "@/components/WayChecker";
import Links from "@/components/Links";

export default function Login() {
  return (
    <div className={`${styles.login}`}>
      <WayChecker page="login" />

      <TabTitle title="Detalhes da conta" />
      <form className={styles.form}>
        <Input
          id="email"
          name="Email"
          type="email"
          placeholder="email@email.com"
          key="user_email"
        />
        <Input
          id="password"
          name="Senha"
          type="password"
          placeholder="*********"
          key="user_password"
        />
        <Links
          text="Não tem uma conta? Cadastrar"
          buttonText="Entrar"
          destiny="shipping"
        />
      </form>
    </div>
  );
}
