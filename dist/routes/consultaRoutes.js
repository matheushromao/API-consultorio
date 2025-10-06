"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultaController_1 = require("../controllers/consultaController");
const validation_1 = require("../middleware/validation");
const validation_2 = require("../schemas/validation");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Gerenciamento de Consultas
 */
/**
 * @swagger
 * /consultas:
 *   post:
 *     summary: Cria uma nova consulta
 *     tags: [Consultas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - dataHora
 *               - pacienteId
 *               - medicoId
 *             properties:
 *               dataHora:
 *                 type: string
 *                 format: date-time
 *               pacienteId:
 *                 type: integer
 *               medicoId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Consulta criada com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/consultas", (0, validation_1.validateBody)(validation_2.createConsultaSchema), consultaController_1.createConsulta);
/**
 * @swagger
 * /consultas:
 *   get:
 *     summary: Retorna todas as consultas
 *     tags: [Consultas]
 *     responses:
 *       200:
 *         description: Lista de consultas
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/consultas", consultaController_1.getAllConsultas);
/**
 * @swagger
 * /consultas/{id}:
 *   get:
 *     summary: Retorna uma consulta pelo ID
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Consulta encontrada
 *       404:
 *         description: Consulta não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/consultas/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), consultaController_1.getConsultaById);
/**
 * @swagger
 * /consultas/{id}:
 *   put:
 *     summary: Atualiza uma consulta
 *     tags: [Consultas]
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
 *               data:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Consulta atualizada com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Consulta não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/consultas/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), (0, validation_1.validateBody)(validation_2.updateConsultaSchema), consultaController_1.updateConsulta);
/**
 * @swagger
 * /consultas/{id}:
 *   delete:
 *     summary: Deleta uma consulta
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Consulta deletada com sucesso
 *       404:
 *         description: Consulta não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/consultas/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), consultaController_1.deleteConsulta);
exports.default = router;
