import express from 'express';
import PacienteController from '../controllers/pacienteController';

const router = express.Router();

router.post('/criar', PacienteController.criarPaciente);
router.get('/listar', PacienteController.listarPacientes);
router.get('/ler/:id', PacienteController.lerPaciente);
router.put('/atualizar/:id', PacienteController.atualizarPaciente);
router.delete('/deletar/:id', PacienteController.deletarPaciente);

export default router;
