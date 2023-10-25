import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Login from "./Paginas/LoginTela";
import UsuarioCadastro from "./Paginas/UsarioCadastro";
import Menu from "./componentes/Menu";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Cabecalho logo="logo192.png" titulo="fav.io" subtitulo="O melhor site" />
      <Rodape titulo="Rodapé" subtitulo="Caduh" />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<UsuarioCadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
