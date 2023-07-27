import React from "react";
import styles from "./Menu.module.css";

export default function Menu(props) {
  return (
    <nav className={styles.cabecalho}>
      {/* Lista de Links */}
      <ul className={styles.lista}>
        <li className={styles.item}><a href="#home" className={styles.link}>Home</a></li>
        <li className={styles.item}><a href="#produtos" className={styles.link}>Produtos</a></li>
        <li className={styles.item}><a href="#sobre" className={styles.link}>Sobre</a></li>
      </ul>
    </nav>
  );
}
