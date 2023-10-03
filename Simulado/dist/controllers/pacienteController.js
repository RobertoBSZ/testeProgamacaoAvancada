"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pacienteService_1 = __importDefault(require("../services/pacienteService"));
class PacienteController {
    async criarPaciente(req, res) {
        const { nomePcnte, senha, usuario } = req.body;
        try {
            const paciente = await pacienteService_1.default.criarPaciente(nomePcnte, senha, usuario);
            res.status(201).json(paciente);
        }
        catch (error) {
            console.error('Erro ao criar paciente:', error);
            res.status(500).json({ error: 'Erro ao criar paciente.' });
        }
    }
    async listarPacientes(req, res) {
        try {
            const pacientes = await pacienteService_1.default.listarPacientes();
            res.status(200).json(pacientes);
        }
        catch (error) {
            console.error('Erro ao listar pacientes:', error);
            res.status(500).json({ error: 'Erro ao listar pacientes.' });
        }
    }
    async lerPaciente(req, res) {
        const { id } = req.params;
        try {
            const paciente = await pacienteService_1.default.lerPaciente(Number(id));
            res.status(200).json(paciente);
        }
        catch (error) {
            console.error('Erro ao ler paciente:', error);
            res.status(500).json({ error: 'Erro ao ler paciente.' });
        }
    }
    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nomePcnte, senha, usuario } = req.body;
        try {
            const paciente = await pacienteService_1.default.atualizarPaciente(Number(id), nomePcnte, senha, usuario);
            res.status(200).json(paciente);
        }
        catch (error) {
            console.error('Erro ao atualizar paciente:', error);
            res.status(500).json({ error: 'Erro ao atualizar paciente.' });
        }
    }
    async deletarPaciente(req, res) {
        const { id } = req.params;
        try {
            await pacienteService_1.default.deletarPaciente(Number(id));
            res.status(204).end();
        }
        catch (error) {
            console.error('Erro ao deletar paciente:', error);
            res.status(500).json({ error: 'Erro ao deletar paciente.' });
        }
    }
}
exports.default = new PacienteController();
