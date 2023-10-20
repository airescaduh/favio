import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Principal from '../Paginas/Principal'

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