"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agendaService_1 = __importDefault(require("../services/agendaService"));
class AgendaController {
    async criarAgenda(req, res) {
        const { data, nomePaciente } = req.body;
        try {
            const agenda = await agendaService_1.default.criarAgenda(data, nomePaciente);
            res.status(201).json(agenda);
        }
        catch (error) {
            console.error('Erro ao criar agenda:', error);
            res.status(500).json({ error: 'Erro ao criar agenda.' });
        }
    }
    async listarAgendas(req, res) {
        try {
            const agendas = await agendaService_1.default.listarAgendas();
            res.status(200).json(agendas);
        }
        catch (error) {
            console.error('Erro ao listar agendas:', error);
            res.status(500).json({ error: 'Erro ao listar agendas.' });
        }
    }
    async lerAgenda(req, res) {
        const { id } = req.params;
        try {
            const agenda = await agendaService_1.default.lerAgenda(Number(id));
            res.status(200).json(agenda);
        }
        catch (error) {
            console.error('Erro ao ler agenda:', error);
            res.status(500).json({ error: 'Erro ao ler agenda.' });
        }
    }
    async atualizarAgenda(req, res) {
        const { id } = req.params;
        const { data, nomePaciente } = req.body;
        try {
            const agenda = await agendaService_1.default.atualizarAgenda(Number(id), data, nomePaciente);
            res.status(200).json(agenda);
        }
        catch (error) {
            console.error('Erro ao atualizar agenda:', error);
            res.status(500).json({ error: 'Erro ao atualizar agenda.' });
        }
    }
    async deletarAgenda(req, res) {
        const { id } = req.params;
        try {
            await agendaService_1.default.deletarAgenda(Number(id));
            res.status(204).end();
        }
        catch (error) {
            console.error('Erro ao deletar agenda:', error);
            res.status(500).json({ error: 'Erro ao deletar agenda.' });
        }
    }
}
exports.default = new AgendaController();
