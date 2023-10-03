"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacienteController_1 = __importDefault(require("../controllers/pacienteController"));
const router = express_1.default.Router();
router.post('/pacientes', pacienteController_1.default.criarPaciente);
router.get('/pacientes', pacienteController_1.default.listarPacientes);
router.get('/pacientes/:id', pacienteController_1.default.lerPaciente);
router.put('/pacientes/:id', pacienteController_1.default.atualizarPaciente);
router.delete('/pacientes/:id', pacienteController_1.default.deletarPaciente);
exports.default = router;
