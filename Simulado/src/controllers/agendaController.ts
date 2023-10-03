import { Request, Response } from 'express';
import AgendaService from '../services/agendaService';

class AgendaController {
  async criarAgenda(req: Request, res: Response) {
    const { data, nomePaciente } = req.body;

    try {
      const agenda = await AgendaService.criarAgenda(data, nomePaciente);
      res.status(201).json(agenda);
    } catch (error) {
      console.error('Erro ao criar agenda:', error);
      res.status(500).json({ error: 'Erro ao criar agenda.' });
    }
  }

  async listarAgendas(req: Request, res: Response) {
    try {
      const agendas = await AgendaService.listarAgendas();
      res.status(200).json(agendas);
    } catch (error) {
      console.error('Erro ao listar agendas:', error);
      res.status(500).json({ error: 'Erro ao listar agendas.' });
    }
  }

  async lerAgenda(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const agenda = await AgendaService.lerAgenda(Number(id));

      res.status(200).json(agenda);
    } catch (error) {
      console.error('Erro ao ler agenda:', error);
      res.status(500).json({ error: 'Erro ao ler agenda.' });
    }
  }

  async atualizarAgenda(req: Request, res: Response) {
    const { id } = req.params;
    const { data, nomePaciente } = req.body;

    try {
      const agenda = await AgendaService.atualizarAgenda(Number(id), data, nomePaciente);

      res.status(200).json(agenda);
    } catch (error) {
      console.error('Erro ao atualizar agenda:', error);
      res.status(500).json({ error: 'Erro ao atualizar agenda.' });
    }
  }

  async deletarAgenda(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await AgendaService.deletarAgenda(Number(id));
      res.status(204).end();
    } catch (error) {
      console.error('Erro ao deletar agenda:', error);
      res.status(500).json({ error: 'Erro ao deletar agenda.' });
    }
  }
}

export default new AgendaController();
