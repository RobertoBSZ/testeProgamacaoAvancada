import { Request, Response } from 'express';
import PacienteService from '../services/pacienteService';

class PacienteController {
  async criarPaciente(req: Request, res: Response) {
    const { nomePcnte, senha, usuario } = req.body;

    try {
      const paciente = await PacienteService.criarPaciente(nomePcnte, senha, usuario);
      res.status(201).json(paciente);
    } catch (error) {
      console.error('Erro ao criar paciente:', error);
      res.status(500).json({ error: 'Erro ao criar paciente.' });
    }
  }

  async listarPacientes(req: Request, res: Response) {
    try {
      const pacientes = await PacienteService.listarPacientes();
      res.status(200).json(pacientes);
    } catch (error) {
      console.error('Erro ao listar pacientes:', error);
      res.status(500).json({ error: 'Erro ao listar pacientes.' });
    }
  }

  async lerPaciente(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const paciente = await PacienteService.lerPaciente(Number(id));

      res.status(200).json(paciente);
    } catch (error) {
      console.error('Erro ao ler paciente:', error);
      res.status(500).json({ error: 'Erro ao ler paciente.' });
    }
  }

  async atualizarPaciente(req: Request, res: Response) {
    const { id } = req.params;
    const { nomePcnte, senha, usuario } = req.body;

    try {
      const paciente = await PacienteService.atualizarPaciente(Number(id), nomePcnte, senha, usuario);

      res.status(200).json(paciente);
    } catch (error) {
      console.error('Erro ao atualizar paciente:', error);
      res.status(500).json({ error: 'Erro ao atualizar paciente.' });
    }
  }

  async deletarPaciente(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await PacienteService.deletarPaciente(Number(id));
      res.status(204).end();
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
      res.status(500).json({ error: 'Erro ao deletar paciente.' });
    }
  }
}

export default new PacienteController();
