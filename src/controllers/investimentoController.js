import * as investimentoServices from '../services/investimentoServices.js'


export const criarInvestimento = async (req, res) => {
    try{
        const {nome, tipo, valor, data} = req.body;
        if (!nome || !tipo || !valor || !data) {
        return res.status(400).json({ error: 'Nome, tipo, valor e data são obrigatórios.' });
        }
        
        const investimento = await investimentoServices.PostInvestimento(req);
        res.status(200).json(investimento);

    } catch(error){
        res.status(500).json({ error: 'Erro ao criar investimento.' });
    }
};

