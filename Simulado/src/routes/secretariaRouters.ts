import express from 'express';
import SecretariaController from '../controllers/secretariaController';

const router = express.Router();

router.post('/criar', SecretariaController.criarSecretaria);
router.get('/listar', SecretariaController.listarSecretarias);
router.get('/ler/:id', SecretariaController.lerSecretaria);
router.put('/atualizar/:id', SecretariaController.atualizarSecretaria);
router.delete('/deletar/:id', SecretariaController.deletarSecretaria);

export default router;
