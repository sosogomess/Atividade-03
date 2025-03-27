import prisma from "../../prisma/client.js";

class AnotacaoModel {
  getAll = async () => {
    return await prisma.nota.findMany();
  };

  getById = async (id) => {
    return await prisma.note.findUnique({
      where: { id },
    });
  };
  
  create = async (titulo, conteudo, favorita, cor) => {
    return await prisma.nota.create({
      data: {
        titulo,
        conteudo,
        favorita,
        cor
      },
    });
  };

  update = async (id, titulo, conteudo, favorita, cor) => {
    try {
      const anotacao = await prisma.nota.update({
        where: { id },
        data: {
          favorita,
          titulo,
          conteudo,
          cor
        },
      });
      return anotacao;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const anotacaoDeletada = await prisma.nota.delete({
        where: { id },
      });

      return anotacaoDeletada;
    } catch (error) {
      console.log("Error ao deletar a anotação", error);
      throw error;
    }
  };
}

export default new AnotacaoModel();
