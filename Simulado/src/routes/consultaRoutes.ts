import express from 'express';
import ConsultaController from '../controllers/consultaController';

const router = express.Router();

router.post('/criar', ConsultaController.criarConsulta);
router.get('/listar', ConsultaController.listarConsultas);
router.get('/ler/:id', ConsultaController.lerConsulta);
router.put('/atualizar/:id', ConsultaController.atualizarConsulta);
router.delete('/deletar/:id', ConsultaController.deletarConsulta);

export default router;
