import React from "react";
import styles from "../Cabecalho/Cabecalho.module.css";
import tt from "../../twitter.png";
import insta from "../../instagram.png";
import wts from "../../whatsapp.png";

const Rodape = () => {
  const obterDataAtual = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className={styles.rodape}>
      <div className={styles.dataCorrente}>
        Data atual: {obterDataAtual()}
      </div>

      <div className={styles.redes}>
        <img className={styles.png} src={tt} alt="Twitter"></img>
        <img className={styles.png} src={insta} alt="Instagram"></img>
        <img className={styles.png} src={wts} alt="WhatsApp"></img>
      </div>
    </div>
  );
};

export default Rodape;
