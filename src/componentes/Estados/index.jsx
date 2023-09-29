import React, { useState } from "react";
import styles from "./Estados.module.css";

const Estados = () => {
  //hook
  const [url, setUrl] = useState("http://www.google.com.br");
  const [nome, setNome] = useState("Google");
  const [favoritos, setFavoritos] = useState([]);

  function addFavorito(nome, url) {
    setFavoritos([...favoritos, { nome, url }]);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // favoritos = [...favoritos, { nome, url }];
    // localStorage.setItem("favorito", JSON.stringify(favoritos));
  }

  function handleUrl(valor) {
    setUrl(valor);
  }

  function handleNome(valor) {
    setNome(valor);
  } 
  return (
    <>
      <ul>
        {favoritos[0] != undefined &&
          favoritos.map((favorito) => (
            <li>
              {favoritos[0].nome} : {favorito.url}
            </li>
          ))}
      </ul>

      <div className={styles.area}>
        <form className={styles.formulario}>
          <h1>{nome}</h1>
          <input
            type="text"
            value={nome}
            onChange={(evento) => {
              handleNome((prev) => evento.target.value);
              console.log(nome);
            }}
          />

          <h1>{url}</h1>
          <input
            type="text"
            value={url}
            onChange={(evento) => {
              handleUrl((prev) => evento.target.value);
              console.log(url);
            }}
          />
          <input
            type="button"
            onClick={() => addFavorito(nome, url)}
            value="adicionar"
          />
          <h1>Favoritos</h1>
          {favoritos.map((elemento) => {
            return <li key={elemento.nome}>{elemento.nome}</li>;
          })}
        </form>
      </div>
    </>
  );
};

export default Estados;
