import { Request, Response } from 'express';
import SecretariaService from '../services/secretariaService';

class SecretariaController {
  async criarSecretaria(req: Request, res: Response) {
    const { nome, RG } = req.body;

    try {
      const secretaria = await SecretariaService.criarSecretaria(nome, RG);
      res.status(201).json(secretaria);
    } catch (error) {
      console.error('Erro ao criar secretaria:', error);
      res.status(500).json({ error: 'Erro ao criar secretaria.' });
    }
  }

  async listarSecretarias(req: Request, res: Response) {
    try {
      const secretarias = await SecretariaService.listarSecretarias();
      res.status(200).json(secretarias);
    } catch (error) {
      console.error('Erro ao listar secretarias:', error);
      res.status(500).json({ error: 'Erro ao listar secretarias.' });
    }
  }

  async lerSecretaria(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const secretaria = await SecretariaService.lerSecretaria(Number(id));

      res.status(200).json(secretaria);
    } catch (error) {
      console.error('Erro ao ler secretaria:', error);
      res.status(500).json({ error: 'Erro ao ler secretaria.' });
    }
  }

  async atualizarSecretaria(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, RG } = req.body;

    try {
      const secretaria = await SecretariaService.atualizarSecretaria(Number(id), nome, RG);

      res.status(200).json(secretaria);
    } catch (error) {
      console.error('Erro ao atualizar secretaria:', error);
      res.status(500).json({ error: 'Erro ao atualizar secretaria.' });
    }
  }

  async deletarSecretaria(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await SecretariaService.deletarSecretaria(Number(id));
      res.status(204).end();
    } catch (error) {
      console.error('Erro ao deletar secretaria:', error);
      res.status(500).json({ error: 'Erro ao deletar secretaria.' });
    }
  }
}

export default new SecretariaController();