import express from 'express';

import AgendaController from '../controllers/agendaController';

const router = express.Router();

router.post('/agendas', AgendaController.criarAgenda);
router.get('/agendas', AgendaController.listarAgendas);
router.get('/agendas/:id', AgendaController.lerAgenda);
router.put('/agendas/:id', AgendaController.atualizarAgenda);
router.delete('/agendas/:id', AgendaController.deletarAgenda);

export default router;
