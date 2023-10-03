"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = __importDefault(require("../controllers/postController"));
const router = (0, express_1.Router)();
router.get("/posts", postController_1.default.listarPosts);
router.get("/post/:id", postController_1.default.listarPosts);
router.post("/post", postController_1.default.criarPost);
router.patch("/post/:id", postController_1.default.atualizarPost);
router.delete("/post/:id", postController_1.default.deletarPost);
exports.default = router;
