import React from "react";
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>      
    <ul >
       
        <li> <Link to={'/'}>Home</Link></li>
        <li> <Link to={'/login'}>Login</Link></li>
        <li> <Link to={'/cadastro'}>Cadastro de Usuario</Link></li>
       </ul>
       
       </>

  )
}

export default Menu;