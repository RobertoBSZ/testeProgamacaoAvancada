"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const secretariaController_1 = __importDefault(require("../controllers/secretariaController"));
const router = express_1.default.Router();
router.post('/secretarias', secretariaController_1.default.criarSecretaria);
router.get('/secretarias', secretariaController_1.default.listarSecretarias);
router.get('/secretarias/:id', secretariaController_1.default.lerSecretaria);
router.put('/secretarias/:id', secretariaController_1.default.atualizarSecretaria);
router.delete('/secretarias/:id', secretariaController_1.default.deletarSecretaria);
exports.default = router;
