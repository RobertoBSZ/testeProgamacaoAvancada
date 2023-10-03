import { Request, Response } from 'express';
import ConsultaService from '../services/consultaService';

class ConsultaController {
  async criarConsulta(req: Request, res: Response) {
    const { data, nomePacnte, nomeSecretaria, nomeDents } = req.body;

    try {
      const consulta = await ConsultaService.criarConsulta(data, nomePacnte, nomeSecretaria, nomeDents);
      res.status(201).json(consulta);
    } catch (error) {
      console.error('Erro ao criar consulta:', error);
      res.status(500).json({ error: 'Erro ao criar consulta.' });
    }
  }

  async listarConsultas(req: Request, res: Response) {
    try {
      const consultas = await ConsultaService.listarConsultas();
      res.status(200).json(consultas);
    } catch (error) {
      console.error('Erro ao listar consultas:', error);
      res.status(500).json({ error: 'Erro ao listar consultas.' });
    }
  }

  async lerConsulta(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const consulta = await ConsultaService.lerConsulta(Number(id));

      res.status(200).json(consulta);
    } catch (error) {
      console.error('Erro ao ler consulta:', error);
      res.status(500).json({ error: 'Erro ao ler consulta.' });
    }
  }

  async atualizarConsulta(req: Request, res: Response) {
    const { id } = req.params;
    const { data, nomePacnte, nomeSecretaria, nomeDents } = req.body;

    try {
      const consulta = await ConsultaService.atualizarConsulta(Number(id), data, nomePacnte, nomeSecretaria, nomeDents);

      res.status(200).json(consulta);
    } catch (error) {
      console.error('Erro ao atualizar consulta:', error);
      res.status(500).json({ error: 'Erro ao atualizar consulta.' });
    }
  }

  async deletarConsulta(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await ConsultaService.deletarConsulta(Number(id));
      res.status(204).end();
    } catch (error) {
      console.error('Erro ao deletar consulta:', error);
      res.status(500).json({ error: 'Erro ao deletar consulta.' });
    }
  }
}

export default new ConsultaController();
