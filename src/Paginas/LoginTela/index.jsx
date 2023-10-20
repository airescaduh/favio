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

  const usuariosLocalStorage =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  function handleLogin() {
    // Verifica se o email e senha correspondem a um usuário
    const usuarioEncontrado = usuariosLocalStorage.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
      // Autenticação bem-sucedida, redireciona ou executa a lógica desejada
      alert("Login bem-sucedido!");
    } else {
      // Autenticação falhou, exibe uma mensagem de erro
      alert("Credenciais inválidas. Tente novamente.");
    }
  }
  return (
    <>
      <div className={styles.area}>
        <form className={styles.formulario}>
          <h3>Email</h3>
          <input
            type="text"
            value={email}
            onChange={(evento) => {
              handleEmail((prev) => evento.target.value);
              console.log(email);
            }}
          />

          <h3>Senha</h3>
          <input
            type="password"
            value={senha}
            onChange={(evento) => {
              handleSenha((prev) => evento.target.value);
            }}
          />

          <input type="button" value="Login" onClick={handleLogin} />
        </form>
      </div>
    </>
  );
};

export default LoginTela;
