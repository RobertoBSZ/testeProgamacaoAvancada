import express from 'express';
import PacienteController from '../controllers/pacienteController';

const router = express.Router();

router.post('/pacientes', PacienteController.criarPaciente);
router.get('/pacientes', PacienteController.listarPacientes);
router.get('/pacientes/:id', PacienteController.lerPaciente);
router.put('/pacientes/:id', PacienteController.atualizarPaciente);
router.delete('/pacientes/:id', PacienteController.deletarPaciente);

export default router;
