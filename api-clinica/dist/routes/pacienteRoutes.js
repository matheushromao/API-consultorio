"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacienteController_1 = require("../controllers/pacienteController");
const validation_1 = require("../middleware/validation");
const validation_2 = require("../schemas/validation");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Gerenciamento de Pacientes
 */
/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Criar novo paciente
 *     tags: [Pacientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - senha
 *               - dataNascimento
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               telefone:
 *                 type: string
 *               dataNascimento:
 *                 type: string
 *     responses:
 *       201:
 *         description: Paciente criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/pacientes", (0, validation_1.validateBody)(validation_2.createPacienteSchema), pacienteController_1.createPaciente);
/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Retornar todos os pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/pacientes", pacienteController_1.getAllPacientes);
/**
 * @swagger
 * /pacientes/{id}:
 *   get:
 *     summary: Retornar paciente pelo ID
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *       404:
 *         description: Paciente não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/pacientes/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), pacienteController_1.getPacienteById);
/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Atualiza um paciente
 *     tags: [Pacientes]
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
 *               telefone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Paciente atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Paciente não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/pacientes/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), (0, validation_1.validateBody)(validation_2.updatePacienteSchema), pacienteController_1.updatePaciente);
/**
 * @swagger
 * /pacientes/{id}:
 *   delete:
 *     summary: Deleta um paciente
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Paciente deletado com sucesso
 *       404:
 *         description: Paciente não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/pacientes/:id", (0, validation_1.validateParams)(validation_2.idParamSchema), pacienteController_1.deletePaciente);
exports.default = router;
