import React, { useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastrousuario = () => {
  const [senha, setsenha] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [usuarios, setusuarios] = useState([]);
  const [contador, setContador] = useState(1); // Inicializa um contador

  function addUsuario(nome, senha, confirmarSenha, email) {
    // Verifique se o nome de usuário já existe
    const usuarioExistente = usuarios.find(
      (usuario) => usuario.email === email
    );

    if (usuarioExistente) {
      alert("Usuário já cadastrado.");
    } else if (senha == confirmarSenha) {
      const novoUsuario = {
        id: contador, // Usa o valor atual do contador como ID
        nome: nome,
        senha: senha,
        email: email,
      };

      // Atualiza o contador
      setContador(contador + 1);

      // Adicione o novo usuário ao array de usuários
      setusuarios([...usuarios, novoUsuario]);
      console.log(usuarios);
      localStorage.setItem(
        "usuarios",
        JSON.stringify([...usuarios, novoUsuario])
      );
    } else {
      alert("As senhas não são iguais. Digite senhas iguais.");
    }
  }

  function handleSenha(valor) {
    setsenha(valor);
  }

  function handleNome(valor) {
    setNome(valor);
  }
  function handleEmail(valor) {
    setEmail(valor);
  }

  function handleConfirmarSenha(valor) {
    setConfirmarSenha(valor);
  }

  return (
    <>
      <div className={styles.area}>
        <form className={styles.formulario}>
          <h1>Nome</h1>
          <input
            type="text"
            value={nome}
            onChange={(evento) => {
              handleNome((prev) => evento.target.value);
              console.log(nome);
            }}
          />

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
          <h1>Confirme a Senha</h1>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(evento) => {
              handleConfirmarSenha((prev) => evento.target.value);
              console.log(confirmarSenha);
            }}
          />

          <input
            type="button"
            onClick={() => addUsuario(nome, senha, confirmarSenha, email)}
            value="Cadastrar"
          />
          <h1>usuarios</h1>
          {usuarios.map((elemento) => {
            return <li key={elemento.id}>{elemento.nome}</li>;
          })}
        </form>
      </div>
    </>
  );
};

export default Cadastrousuario;
