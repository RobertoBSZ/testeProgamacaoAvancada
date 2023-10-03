"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class SecretariaService {
    async criarSecretaria(nome, RG) {
        try {
            const secretaria = await prisma.secretaria.create({
                data: {
                    nome,
                    RG,
                },
            });
            return secretaria;
        }
        catch (error) {
            console.error('Erro ao criar secretaria:', error);
            throw new Error('Erro ao criar secretaria.');
        }
    }
    async listarSecretarias() {
        try {
            const secretarias = await prisma.secretaria.findMany();
            return secretarias;
        }
        catch (error) {
            console.error('Erro ao listar secretarias:', error);
            throw new Error('Erro ao listar secretarias.');
        }
    }
    async lerSecretaria(id) {
        try {
            const secretaria = await prisma.secretaria.findUnique({
                where: { id: Number(id) },
            });
            if (!secretaria) {
                throw new Error('Secretaria não encontrada.');
            }
            return secretaria;
        }
        catch (error) {
            console.error('Erro ao ler secretaria:', error);
            throw new Error('Erro ao ler secretaria.');
        }
    }
    async atualizarSecretaria(id, nome, RG) {
        try {
            const secretaria = await prisma.secretaria.update({
                where: { id: Number(id) },
                data: {
                    nome,
                    RG,
                },
            });
            return secretaria;
        }
        catch (error) {
            console.error('Erro ao atualizar secretaria:', error);
            throw new Error('Erro ao atualizar secretaria.');
        }
    }
    async deletarSecretaria(id) {
        try {
            await prisma.secretaria.delete({
                where: { id: Number(id) },
            });
        }
        catch (error) {
            console.error('Erro ao deletar secretaria:', error);
            throw new Error('Erro ao deletar secretaria.');
        }
    }
}
exports.default = new SecretariaService();
