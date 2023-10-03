"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ConsultaService {
    async criarConsulta(data, nomePacnte, nomeSecretaria, nomeDents) {
        try {
            const consulta = await prisma.consulta.create({
                data: {
                    data,
                    nomePacnte,
                    nomeSecretaria,
                    nomeDents,
                },
            });
            return consulta;
        }
        catch (error) {
            console.error('Erro ao criar consulta:', error);
            throw new Error('Erro ao criar consulta.');
        }
    }
    async listarConsultas() {
        try {
            const consultas = await prisma.consulta.findMany();
            return consultas;
        }
        catch (error) {
            console.error('Erro ao listar consultas:', error);
            throw new Error('Erro ao listar consultas.');
        }
    }
    async lerConsulta(id) {
        try {
            const consulta = await prisma.consulta.findUnique({
                where: { id },
                include: {
                    paciente: true,
                    secretaria: true,
                    agendas: true,
                },
            });
            if (!consulta) {
                throw new Error('Consulta não encontrada.');
            }
            return consulta;
        }
        catch (error) {
            console.error('Erro ao ler consulta:', error);
            throw new Error('Erro ao ler consulta.');
        }
    }
    async atualizarConsulta(id, data, nomePacnte, nomeSecretaria, nomeDents) {
        try {
            const consulta = await prisma.consulta.update({
                where: { id },
                data: {
                    data,
                    nomePacnte,
                    nomeSecretaria,
                    nomeDents,
                },
                include: {
                    paciente: true,
                    secretaria: true,
                    agendas: true,
                },
            });
            return consulta;
        }
        catch (error) {
            console.error('Erro ao atualizar consulta:', error);
            throw new Error('Erro ao atualizar consulta.');
        }
    }
    async deletarConsulta(id) {
        try {
            await prisma.consulta.delete({
                where: { id },
            });
        }
        catch (error) {
            console.error('Erro ao deletar consulta:', error);
            throw new Error('Erro ao deletar consulta.');
        }
    }
}
exports.default = new ConsultaService();
