
export const CriarInvestimento = async (investimentoData) =>{

    const novoInvestimento = await prisma.investimento.create({
      data: {
        nome: investimentoData.nome,
        tipo: investimentoData.tipo,
        valor: investimentoData.valor,
        data: investimentoData.data,
        
      }
    });
    return novoInvestimento;
}

