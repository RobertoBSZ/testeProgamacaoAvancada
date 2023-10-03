"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacienteController_1 = __importDefault(require("../controllers/pacienteController"));
const router = express_1.default.Router();
router.post('/criar', pacienteController_1.default.criarPaciente);
router.get('/listar', pacienteController_1.default.listarPacientes);
router.get('/ler/:id', pacienteController_1.default.lerPaciente);
router.put('/atualizar/:id', pacienteController_1.default.atualizarPaciente);
router.delete('/deletar/:id', pacienteController_1.default.deletarPaciente);
exports.default = router;
