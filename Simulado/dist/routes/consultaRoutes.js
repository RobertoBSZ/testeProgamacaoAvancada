"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const consultaController_1 = __importDefault(require("../controllers/consultaController"));
const router = express_1.default.Router();
router.post('/consultas', consultaController_1.default.criarConsulta);
router.get('/consultas', consultaController_1.default.listarConsultas);
router.get('/consultas/:id', consultaController_1.default.lerConsulta);
router.put('/consultas/:id', consultaController_1.default.atualizarConsulta);
router.delete('/consultas/:id', consultaController_1.default.deletarConsulta);
exports.default = router;
