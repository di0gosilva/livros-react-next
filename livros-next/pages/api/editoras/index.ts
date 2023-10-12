import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "@/classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        } catch (error) {
            const editoras = controleEditora.getEditoras();
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};