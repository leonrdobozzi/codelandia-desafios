import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import styles from "./style/style.module.scss";
import { Player } from "./components/Player";

function App() {
  return (
    <div className="App">
      <div className={styles.app}>
        <Header />
        <Main />
        <Player />
      </div>
    </div>
  );
}

export default App;
