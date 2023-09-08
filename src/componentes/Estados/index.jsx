import React, { useState } from "react";

const Estados = () => {
  //hook
  const [url, setUrl] = useState("http://www.google.com.br");
  const [nome, setNome] = useState("Google");
  const [favoritos, setFavoritos] = useState([]);

  function addFavorito(nome, url) {
    let favorito = { nome, url };
    console.log(favoritos);
    setFavoritos([...favoritos, favorito]);
  }

  function handleInput(valor) {
    setUrl(valor);
  }

  function handleNome(valor) {
    setNome(valor);
  }
  return (
    <div>
      <h1>Estados</h1>

      <h1>{nome}</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => handleNome(e.target.value)}
      />

      <h1>{url}</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={() => addFavorito(nome, url)}>Adicionar</button>
      <h1>Favoritos</h1>
      {favoritos.map((elemento) => {
        return <li>{elemento.nome}</li>;
      })}
    </div>
  );
};

export default Estados;
