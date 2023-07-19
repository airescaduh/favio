import React from "react";
import styles from "../Cabecalho/Cabecalho.module.css";


export default function Rodape(props) {
  return (
    <div className={styles.rodape}>
    <p className={styles.titulo}>{props.titulo}</p>
    <p className={`${styles.titulo} ${styles.subtitulo}`}>{props.subtitulo}</p>
  </div>
  );
}
