"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const pacienteRouters_1 = __importDefault(require("./routes/pacienteRouters"));
const secretariaRouters_1 = __importDefault(require("./routes/secretariaRouters"));
const consultaRoutes_1 = __importDefault(require("./routes/consultaRoutes"));
const agendaRoutes_1 = __importDefault(require("./routes/agendaRoutes"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api/pacientes', pacienteRouters_1.default);
app.use('/api/secretarias', secretariaRouters_1.default);
app.use('/api/consultas', consultaRoutes_1.default);
app.use('/api/agendas', agendaRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Seu servidor está funcionando!');
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
