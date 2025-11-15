"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fisioterapeutaController_1 = require("../controllers/fisioterapeutaController");
const validation_1 = require("../middleware/validation");
const validation_2 = require("../schemas/validation");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Fisioterapeutas
 *   description: Gerenciamento de Fisioterapeutas
 */
/**
 * @swagger
 * /Fisioterapeutas:
 *   post:
 *     summary: Cria um novo Fisioterapeuta
 *     tags: [Fisioterapeutas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - especialidade
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               especialidade:
 *                 type: string
 *               crm:
 *                 type: string
 *     responses:
 *       201:
 *         description: Fisioterapeuta criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/fisioterapeutas", (0, validation_1.validateBody)(validation_2.createFisioterapeutaSchema), fisioterapeutaController_1.createFisioterapeuta);
/**
 * @swagger
 * /medicos:
 *   get:
 *     summary: Retorna todos os fisioterapeutas cadastrados no banco
 *     tags: [Fisioterapeutas]
 *     responses:
 *       200:
 *         description: Lista de fisioterapeutas
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/fisioterapeutas", fisioterapeutaController_1.getAllFisioterapeutas);
/**
 * @swagger
 * /medicos/{id}:
 *   get:
 *     summary: Retornar fisioterapeuta pelo ID
 *     tags: [Fisioterapeutas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fisioterapeuta encontrado
 *       404:
 *         description: Fisioterapeuta não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/fisioterapeutas/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), fisioterapeutaController_1.getFisioterapeutaById);
/**
 * @swagger
 * /medicos/{id}:
 *   put:
 *     summary: Atualiza um Fisioterapeuta
 *     tags: [Fisioterapeutas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               especialidade:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Fisioterapeuta atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Fisioterapeuta não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/fisioterapeutas/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), (0, validation_1.validateBody)(validation_2.updateFisioterapeutaSchema), fisioterapeutaController_1.updateFisioterapeuta);
/**
 * @swagger
 * /medicos/{id}:
 *   delete:
 *     summary: Deletar um Fisioterapeuta
 *     tags: [Fisioterapeutas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Fisioterapeuta deletado com sucesso
 *       404:
 *         description: Fisioterapeuta não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/fisioterapeutas/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), fisioterapeutaController_1.deleteFisioterapeuta);
exports.default = router;
