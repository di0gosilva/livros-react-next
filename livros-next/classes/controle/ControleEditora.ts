import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
    new Editora(1, 'Alta Books'),
    new Editora(2, 'Pearson'),
    new Editora(3, 'Addison Wesley'),
    new Editora(4, 'Pearson'),
];

class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = editoras.find((editora) => editora.codEditora === codEditora);
        return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
}

export default ControleEditora;