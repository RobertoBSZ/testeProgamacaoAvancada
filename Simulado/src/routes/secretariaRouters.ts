import express from 'express';
import SecretariaController from '../controllers/secretariaController';

const router = express.Router();

router.post('/secretarias', SecretariaController.criarSecretaria);
router.get('/secretarias', SecretariaController.listarSecretarias);
router.get('/secretarias/:id', SecretariaController.lerSecretaria);
router.put('/secretarias/:id', SecretariaController.atualizarSecretaria);
router.delete('/secretarias/:id', SecretariaController.deletarSecretaria);

export default router;
