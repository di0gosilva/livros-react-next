import { NextApiRequest, NextApiResponse } from "next";
import ControleLivros from "@/classes/controle/ControleLivros";

const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        try {
            const { codigo } = req.query;
            controleLivro.excluir(Number(codigo));
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};