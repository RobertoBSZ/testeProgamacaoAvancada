"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agendaController_1 = __importDefault(require("../controllers/agendaController"));
const router = express_1.default.Router();
router.post('/agendas', agendaController_1.default.criarAgenda);
router.get('/agendas', agendaController_1.default.listarAgendas);
router.get('/agendas/:id', agendaController_1.default.lerAgenda);
router.put('/agendas/:id', agendaController_1.default.atualizarAgenda);
router.delete('/agendas/:id', agendaController_1.default.deletarAgenda);
exports.default = router;
