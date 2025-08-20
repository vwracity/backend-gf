import * as InvestimentoRepositories from '../services/investimentoServices.js'

export const criarInvestimento = async (investimentoData) =>{
    if (investimentoData.valor <= 0){
        throw new Error('Valor tem que ser maior que 0');
    }
    dataAtual = new Date();
    if(investimentoData.data < dataAtual){
        throw new Error('Não é possível investir numa data passada.');
    }
    
    const novoInvestimento = await InvestimentoRepositories.criarInvestimento(investimentoData)
    return novoInvestimento
}