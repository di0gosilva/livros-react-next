import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "@/classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { codEditora } = req.query;
            const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
            res.status(200).json({ nome: nomeEditora });
        } catch (error) {
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};