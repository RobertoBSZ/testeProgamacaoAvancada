import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class PacienteService {
  async criarPaciente(nomePcnte: string, senha: number, usuario: string) {
    try {
      const paciente = await prisma.paciente.create({
        data: {
          nomePcnte,
          senha,
          usuario,
        },
      });
      return paciente;
    } catch (error) {
      console.error('Erro ao criar paciente:', error);
      throw new Error('Erro ao criar paciente.');
    }
  }

  async listarPacientes() {
    try {
      const pacientes = await prisma.paciente.findMany();
      return pacientes;
    } catch (error) {
      console.error('Erro ao listar pacientes:', error);
      throw new Error('Erro ao listar pacientes.');
    }
  }

  async lerPaciente(id: number) {
    try {
      const paciente = await prisma.paciente.findUnique({
        where: { id: Number(id) },
      });

      if (!paciente) {
        throw new Error('Paciente não encontrado.');
      }

      return paciente;
    } catch (error) {
      console.error('Erro ao ler paciente:', error);
      throw new Error('Erro ao ler paciente.');
    }
  }

  async atualizarPaciente(id: number, nomePcnte: string, senha: number, usuario: string) {
    try {
      const paciente = await prisma.paciente.update({
        where: { id: Number(id) },
        data: {
          nomePcnte,
          senha,
          usuario,
        },
      });

      return paciente;
    } catch (error) {
      console.error('Erro ao atualizar paciente:', error);
      throw new Error('Erro ao atualizar paciente.');
    }
  }

  async deletarPaciente(id: number) {
    try {
      await prisma.paciente.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
      throw new Error('Erro ao deletar paciente.');
    }
  }
}

export default new PacienteService();
