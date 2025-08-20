
import prisma from '../database/prisma.js';

export const criarInvestimento = async (investimentoData) => {
    const novoInvestimento = await prisma.investimentos.create({
      data: {
        nome: investimentoData.nome,
        tipo: investimentoData.tipo,
        valor: investimentoData.valor,
        data: new Date(investimentoData.data),
      }
    });
    return novoInvestimento;
};

export const buscarTodosInvestimentos = async () => {
    const investimentos = await prisma.investimentos.findMany();
    return investimentos;
};

export const buscarInvestimentoPorId = async (id) => {
    const investimento = await prisma.investimentos.findUnique({
      where: { 
        id: Number(id)
      }

    });
    return investimento;
};

export const atualizarInvestimento = async (id, investimentoData) => {
    const investimentoAtualizado = await prisma.investimentos.update({
        
        where: { 
          id: Number(id)
        },

        data: {
            nome: investimentoData.nome,
            tipo: investimentoData.tipo,
            valor: investimentoData.valor,
            data: new Date(investimentoData.data),
        }
    });
    return investimentoAtualizado;
};

export const deletarInvestimento = async (id) => {
    await prisma.investimentos.delete({
        where: { 
          id: Number(id)
         }
    });
    return { message: 'Investimento deletado com sucesso' };
};

