import logo from "./logo.svg";
import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Conteudo, { OlaMundo } from "./componentes/Conteudo";
/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/

function App() {
  OlaMundo();
  /*Todo componente deve retornar um HTML, entre em parênteses*/
  return (
    /*O React substitui className por class pq class é palavra reservada do JS*/
    <>
      <Cabecalho logo="logo192.png" titulo="fav.io" subtitulo="O melhor site" />
      <Rodape />
      <Conteudo />
    </>
  );
}

export default App;
