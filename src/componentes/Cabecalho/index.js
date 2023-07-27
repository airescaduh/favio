import React, { useState } from "react";
import styles from "./Cabecalho.module.css";

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      <img src={props.logo} alt="Logo" />
      <p className={styles.titulo}>{props.titulo}</p>
    </div>
  );
}
