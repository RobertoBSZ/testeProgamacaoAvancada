import express from 'express';

import AgendaController from '../controllers/agendaController';

const router = express.Router();

router.post('/criar', AgendaController.criarAgenda);
router.get('/listar', AgendaController.listarAgendas);
router.get('/ler/:id', AgendaController.lerAgenda);
router.put('/atualizar/:id', AgendaController.atualizarAgenda);
router.delete('/deletar/:id', AgendaController.deletarAgenda);

export default router;
