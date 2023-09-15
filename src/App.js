import logo from "./logo.svg";
import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Conteudo from "./componentes/Conteudo";
import Menu from "./componentes/Menu";
import Estados from "./componentes/Estados";
/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/

function App() {
  /*Todo componente deve retornar um HTML, entre em parênteses*/
  /*O React substitui className por class pq class é palavra reservada do JS*/
  return (
    <>
      {/* <Menu /> */}
      {/* <Cabecalho logo="logo192.png" titulo="fav.io" subtitulo="O melhor site" /> */}
      {/* <Conteudo titulo="A" /> */}
      <Estados />
      {/* <Rodape titulo="Rodapé" subtitulo="Caduh" /> */}
      <Cabecalho logo="logo192.png" titulo="fav.io" subtitulo="O melhor site" />
      <Conteudo titulo="A" />
      <Rodape titulo="Rodapé" subtitulo="Caduh" />
    </>
  );
}

export default App;
