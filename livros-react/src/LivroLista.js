import { useState, useEffect } from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora"

function LinhaLivro(props) {
  const {livro, excluir, controleEditora} = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);  
  
  return (
    <tr>
      <td>{livro.titulo}<br />
        <button className="btn btn-sm btn-danger" onClick={() => excluir(livro.codigo)}>
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td></td>
      <td>
        <ul>{livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}</ul>
      </td>
    </tr>
  );
};

export default function LivroLista() {

  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  useEffect(() => {
    const carregarLivros = async () => {
      const livrosCarregados = controleLivro.obterLivros();
      setLivros(livrosCarregados);
      setCarregado(true);
    };

    carregarLivros();
  }, [controleLivro]);

  const excluir = (codigo) => {
      controleLivro.excluir(codigo);
      setCarregado(false);
  };
  
  return (
    <main className="container">
      <h1 className="text-start">Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead className="table-dark text-start"> 
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th></th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {carregado && livros.map((livro) => (
            <LinhaLivro
            key={livro.codigo}
            livro={livro}
            excluir={excluir}
            controleEditora={controleEditora}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};