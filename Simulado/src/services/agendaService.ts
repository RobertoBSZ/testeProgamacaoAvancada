import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AgendaService {
  async criarAgenda(data: Date, nomePaciente: string) {
    try {
      const agenda = await prisma.agenda.create({
        data: {
          data,
          nomePaciente,
        },
      });
      return agenda;
    } catch (error) {
      console.error('Erro ao criar agenda:', error);
      throw new Error('Erro ao criar agenda.');
    }
  }

  async listarAgendas() {
    try {
      const agendas = await prisma.agenda.findMany({
        include: {
          paciente: true,
          consultas: true,
        },
      });
      return agendas;
    } catch (error) {
      console.error('Erro ao listar agendas:', error);
      throw new Error('Erro ao listar agendas.');
    }
  }

  async lerAgenda(id: number) {
    try {
      const agenda = await prisma.agenda.findUnique({
        where: { id },
        include: {
          paciente: true,
          consultas: true,
        },
      });

      if (!agenda) {
        throw new Error('Agenda não encontrada.');
      }

      return agenda;
    } catch (error) {
      console.error('Erro ao ler agenda:', error);
      throw new Error('Erro ao ler agenda.');
    }
  }

  async atualizarAgenda(id: number, data: Date, nomePaciente: string) {
    try {
      const agenda = await prisma.agenda.update({
        where: { id },
        data: {
          data,
          nomePaciente,
        },
        include: {
          paciente: true,
          consultas: true,
        },
      });

      return agenda;
    } catch (error) {
      console.error('Erro ao atualizar agenda:', error);
      throw new Error('Erro ao atualizar agenda.');
    }
  }

  async deletarAgenda(id: number) {
    try {
      await prisma.agenda.delete({
        where: { id },
      });
    } catch (error) {
      console.error('Erro ao deletar agenda:', error);
      throw new Error('Erro ao deletar agenda.');
    }
  }
}

export default new AgendaService();
