import express from 'express';
import ConsultaController from '../controllers/consultaController';

const router = express.Router();

router.post('/consultas', ConsultaController.criarConsulta);
router.get('/consultas', ConsultaController.listarConsultas);
router.get('/consultas/:id', ConsultaController.lerConsulta);
router.put('/consultas/:id', ConsultaController.atualizarConsulta);
router.delete('/consultas/:id', ConsultaController.deletarConsulta);

export default router;
