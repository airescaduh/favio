import React, { useState } from "react";
import styles from "./Login.module.css";

const LoginTela = () => {
  const [senha, setsenha] = useState("");
  const [email, setEmail] = useState("");

  function handleEmail(valor) {
    setEmail(valor);
  }

  function handleSenha(valor) {
    setsenha(valor);
  }

  return (
    <>
      <div className={styles.area}>
        <form className={styles.formulario}>
          <h1>Email</h1>
          <input
            type="text"
            value={email}
            onChange={(evento) => {
              handleEmail((prev) => evento.target.value);
              console.log(email);
            }}
          />

          <h1>Senha</h1>
          <input
            type="password"
            value={senha}
            onChange={(evento) => {
              handleSenha((prev) => evento.target.value);
            }}
          />

          <input
            type="button"
            onClick={() => addUsuario(email, senha)}
            value="Cadastrar"
          />
          <h1>usuarios</h1>
          {usuarios.map((elemento) => {
            return <li key={elemento.nome}>{elemento.nome}</li>;
          })}
        </form>
      </div>
    </>
  );
};

export default LoginTela;
