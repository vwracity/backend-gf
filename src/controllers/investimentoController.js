import * as investimentoServices from '../services/investimentoServices.js';

export const criarInvestimento = async (req, res) => {
    try {
        const {nome, tipo, valor, data} = req.body;
        if (!nome || !tipo || !valor || !data) {
            return res.status(400).json({ error: 'Nome, tipo, valor e data são obrigatórios.' });
        }
        
        const investimento = await investimentoServices.criarInvestimento(req.body);
        res.status(201).json(investimento);

    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao criar investimento.' });

    }
};

export const buscarTodosInvestimentos = async (req, res) => {
    try {
        const investimentos = await investimentoServices.buscarTodosInvestimentos();
        res.status(200).json(investimentos);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar investimentos.' });

    }
};

export const buscarInvestimentoPorId = async (req, res) => {
    try {
        const { investimentoId } = req.params;
        const investimento = await investimentoServices.buscarInvestimentoPorId(investimentoId);
        res.status(200).json(investimento);

    } catch (error) {
        if (error.message === 'Investimento não encontrado') {
            return res.status(404).json({ error: error.message });
            
        }
        res.status(500).json({ error: 'Erro ao buscar investimento.' });
    }
};

export const atualizarInvestimento = async (req, res) => {
    try {
        const { investimentoId } = req.params;
        const {nome, tipo, valor, data} = req.body;
        
        if (!nome || !tipo || !valor || !data) {
            return res.status(400).json({ error: 'Nome, tipo, valor e data são obrigatórios.' });
        }
        
        const investimentoAtualizado = await investimentoServices.atualizarInvestimento(investimentoId, req.body);
        res.status(200).json(investimentoAtualizado);
    } catch (error) {
        if (error.message === 'Investimento não encontrado') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: error.message || 'Erro ao atualizar investimento.' });
    }
};

export const deletarInvestimento = async (req, res) => {
    try {
        const { investimentoId } = req.params;
        const resultado = await investimentoServices.deletarInvestimento(investimentoId);
        res.status(200).json(resultado);
    } catch (error) {
        if (error.message === 'Investimento não encontrado') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: 'Erro ao deletar investimento.' });
    }
};

