import * as InvestimentoRepositories from '../repositories/investimentoRepositories.js';

export const criarInvestimento = async (investimentoData) => {
    if (investimentoData.valor <= 0) {
        throw new Error('Valor tem que ser maior que 0');
    }
    const dataAtual = new Date();
    if (new Date(investimentoData.data) < dataAtual) {
        throw new Error('Não é possível investir numa data passada.');
    }
    
    const novoInvestimento = await InvestimentoRepositories.criarInvestimento(investimentoData);
    return novoInvestimento;
};

export const buscarTodosInvestimentos = async () => {
    const investimentos = await InvestimentoRepositories.buscarTodosInvestimentos();
    return investimentos;
};

export const buscarInvestimentoPorId = async (id) => {
    const investimento = await InvestimentoRepositories.buscarInvestimentoPorId(id);
    if (!investimento) {
        throw new Error('Investimento não encontrado');
    }
    return investimento;
};

export const atualizarInvestimento = async (id, investimentoData) => {
    // Verificar se o investimento existe
    await buscarInvestimentoPorId(id);
    
    // Validações
    if (investimentoData.valor <= 0) {
        throw new Error('Valor tem que ser maior que 0');
    }
    
    const dataAtual = new Date();
    if (new Date(investimentoData.data) < dataAtual) {
        throw new Error('Não é possível investir numa data passada.');
    }
    
    const investimentoAtualizado = await InvestimentoRepositories.atualizarInvestimento(id, investimentoData);
    return investimentoAtualizado;
};

export const deletarInvestimento = async (id) => {
    // Verificar se o investimento existe
    await buscarInvestimentoPorId(id);
    
    const resultado = await InvestimentoRepositories.deletarInvestimento(id);
    return resultado;
};