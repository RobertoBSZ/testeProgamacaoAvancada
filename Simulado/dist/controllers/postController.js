"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const postServices_1 = __importDefault(require("../services/postServices"));
const prisma = new client_1.PrismaClient();
class PostController {
    constructor() { }
    async listarPosts(req, res) {
        const posts = await postServices_1.default.listarPosts();
        return res.status(200).json({
            status: "ok",
            posts: posts,
        });
    }
    async atualizarPost(req, res) {
        return res.send("Atualizar Posts");
    }
    async criarPost(req, res) {
        const { title, content, authorId } = req.body;
        try {
            const newPost = await prisma.post.create({
                data: {
                    title: 'sadas',
                    content: 'sadas',
                    authorId: 1,
                },
            });
            res.status(201).json(newPost);
        }
        catch (error) {
            console.error('Erro ao criar postagem:', error);
            res.status(500).json({ error: 'Erro ao criar postagem.' });
        }
    }
    async deletarPost(req, res) {
        return res.send("Deletar Posts");
    }
}
exports.default = new PostController();
