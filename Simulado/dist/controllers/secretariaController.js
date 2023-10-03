"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const secretariaService_1 = __importDefault(require("../services/secretariaService"));
class SecretariaController {
    async criarSecretaria(req, res) {
        const { nome, RG } = req.body;
        try {
            const secretaria = await secretariaService_1.default.criarSecretaria(nome, RG);
            res.status(201).json(secretaria);
        }
        catch (error) {
            console.error('Erro ao criar secretaria:', error);
            res.status(500).json({ error: 'Erro ao criar secretaria.' });
        }
    }
    async listarSecretarias(req, res) {
        try {
            const secretarias = await secretariaService_1.default.listarSecretarias();
            res.status(200).json(secretarias);
        }
        catch (error) {
            console.error('Erro ao listar secretarias:', error);
            res.status(500).json({ error: 'Erro ao listar secretarias.' });
        }
    }
    async lerSecretaria(req, res) {
        const { id } = req.params;
        try {
            const secretaria = await secretariaService_1.default.lerSecretaria(Number(id));
            res.status(200).json(secretaria);
        }
        catch (error) {
            console.error('Erro ao ler secretaria:', error);
            res.status(500).json({ error: 'Erro ao ler secretaria.' });
        }
    }
    async atualizarSecretaria(req, res) {
        const { id } = req.params;
        const { nome, RG } = req.body;
        try {
            const secretaria = await secretariaService_1.default.atualizarSecretaria(Number(id), nome, RG);
            res.status(200).json(secretaria);
        }
        catch (error) {
            console.error('Erro ao atualizar secretaria:', error);
            res.status(500).json({ error: 'Erro ao atualizar secretaria.' });
        }
    }
    async deletarSecretaria(req, res) {
        const { id } = req.params;
        try {
            await secretariaService_1.default.deletarSecretaria(Number(id));
            res.status(204).end();
        }
        catch (error) {
            console.error('Erro ao deletar secretaria:', error);
            res.status(500).json({ error: 'Erro ao deletar secretaria.' });
        }
    }
}
exports.default = new SecretariaController();
