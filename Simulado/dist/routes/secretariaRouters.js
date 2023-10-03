"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const secretariaController_1 = __importDefault(require("../controllers/secretariaController"));
const router = express_1.default.Router();
router.post('/criar', secretariaController_1.default.criarSecretaria);
router.get('/listar', secretariaController_1.default.listarSecretarias);
router.get('/ler/:id', secretariaController_1.default.lerSecretaria);
router.put('/atualizar/:id', secretariaController_1.default.atualizarSecretaria);
router.delete('/deletar/:id', secretariaController_1.default.deletarSecretaria);
exports.default = router;
