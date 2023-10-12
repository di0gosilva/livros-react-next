import ControleEditora from "@/classes/controle/ControleEditora";
import Livro from "@/classes/modelo/Livro";
import React from "react";

const controleEditora = new ControleEditora()

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    
    // return (
    //     <tr>
    //         <td>{livro.titulo}</td>
    //         <td>{livro.autores}</td>
    //         <td>{livro.codEditora}</td>
    //         <td>
    //             <button className="btn btn-danger" onClick={excluir}>
    //                 Excluir
    //             </button>
    //         </td>
    //     </tr>
    // );
    const {livro, excluir} = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);  
    
    return (
        <tr>
        <td>{livro.titulo}<br />
            <button className="btn btn-sm btn-danger" onClick={() => excluir()}>
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