import React, { useState } from "react";
import styles from "./Cabecalho.module.css";

export default function Cabecalho(props) {
  const [menuAberto, setMenuAberto] = useState(false);

const toggleMenu = () => {
  console.log("Menu antes de alternar:", menuAberto);
  setMenuAberto(!menuAberto);
  console.log("Menu após alternar:", !menuAberto);
};

  return (
    <div className={styles.cabecalho}>
      <img src={props.logo} alt="Logo" />
      <p className={styles.titulo}>{props.titulo}</p>
      <p className={`${styles.titulo} ${styles.subtitulo}`}>{props.subtitulo}</p>


      {/* Menu Hambúrguer */}
      <div className={`${styles.hamburguer} ${menuAberto ? styles.aberto : ""}`} onClick={toggleMenu}>
        {/* Opções de Link */}
        <a href="#home" className={styles.link} onClick={toggleMenu}>Home</a>
        <a href="#produtos" className={styles.link} onClick={toggleMenu}>Produtos</a>
        <a href="#sobre" className={styles.link} onClick={toggleMenu}>Sobre</a>
      </div>
    </div>
  );
}
