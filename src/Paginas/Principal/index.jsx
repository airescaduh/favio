import React from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import Menu from "../../componentes/Menu";
import Estados from "../Estados";

const Principal = () => {
  return (
    <>
      <Menu />
      <Cabecalho logo="logo192.png" titulo="fav.io" subtitulo="O melhor site" />
      <Estados />
      <Rodape titulo="Rodapé" subtitulo="Caduh" />
    </>
  );
};

export default Principal;
