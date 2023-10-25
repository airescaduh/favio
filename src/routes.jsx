import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './Paginas/Principal'
import Login from './Paginas/LoginTela'
import UsuarioCadastro from './Paginas/UsarioCadastro'
const routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="cadastro" element={<UsuarioCadastro/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default routes;