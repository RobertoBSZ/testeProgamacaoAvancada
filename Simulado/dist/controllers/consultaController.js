"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consultaService_1 = __importDefault(require("../services/consultaService"));
class ConsultaController {
    async criarConsulta(req, res) {
        const { data, nomePacnte, nomeSecretaria, nomeDents } = req.body;
        try {
            const consulta = await consultaService_1.default.criarConsulta(data, nomePacnte, nomeSecretaria, nomeDents);
            res.status(201).json(consulta);
        }
        catch (error) {
            console.error('Erro ao criar consulta:', error);
            res.status(500).json({ error: 'Erro ao criar consulta.' });
        }
    }
    async listarConsultas(req, res) {
        try {
            const consultas = await consultaService_1.default.listarConsultas();
            res.status(200).json(consultas);
        }
        catch (error) {
            console.error('Erro ao listar consultas:', error);
            res.status(500).json({ error: 'Erro ao listar consultas.' });
        }
    }
    async lerConsulta(req, res) {
        const { id } = req.params;
        try {
            const consulta = await consultaService_1.default.lerConsulta(Number(id));
            res.status(200).json(consulta);
        }
        catch (error) {
            console.error('Erro ao ler consulta:', error);
            res.status(500).json({ error: 'Erro ao ler consulta.' });
        }
    }
    async atualizarConsulta(req, res) {
        const { id } = req.params;
        const { data, nomePacnte, nomeSecretaria, nomeDents } = req.body;
        try {
            const consulta = await consultaService_1.default.atualizarConsulta(Number(id), data, nomePacnte, nomeSecretaria, nomeDents);
            res.status(200).json(consulta);
        }
        catch (error) {
            console.error('Erro ao atualizar consulta:', error);
            res.status(500).json({ error: 'Erro ao atualizar consulta.' });
        }
    }
    async deletarConsulta(req, res) {
        const { id } = req.params;
        try {
            await consultaService_1.default.deletarConsulta(Number(id));
            res.status(204).end();
        }
        catch (error) {
            console.error('Erro ao deletar consulta:', error);
            res.status(500).json({ error: 'Erro ao deletar consulta.' });
        }
    }
}
exports.default = new ConsultaController();
