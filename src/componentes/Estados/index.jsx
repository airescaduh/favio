import React, { useState } from "react";
import styles from "./Estados.module.css";

const Estados = () => {
  //hook
  const [url, setUrl] = useState("http://www.google.com.br");
  const [nome, setNome] = useState("Google");
  const [favoritos, setFavoritos] = useState([]);

  function addFavorito(nome, url) {
    localStorage.setItem("favorito", { nome, url });

    let favorito = { nome, url };
    console.log(favoritos);
    setFavoritos([...favoritos, favorito]);
  
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
    <div className={styles.area}>
      <form
        className={styles.formulario}
        onSubmit={() => alert("Favorito Salvo")}
      >
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
        <input type="button" onClick={() => addFavorito(nome, url)} value='adicionar'/>
        <h1>Favoritos</h1>
        {favoritos.map((elemento) => {
          return <li>{elemento.nome}</li>;
        })}
      </form>
    </div>
  );
};

export default Estados;
