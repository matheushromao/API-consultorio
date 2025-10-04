import { Router } from "express";
import {
  createFisioterapeuta,
  getAllFisioterapeutas,
  getFisioterapeutaById,
  updateFisioterapeuta,
  deleteFisioterapeuta,
} from "../controllers/fisioterapeutaController";
import { validateBody, validateParams } from "../middleware/validation";
import {
  createFisioterapeutaSchema,
  updateFisioterapeutaSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

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
router.post(
  "/fisioterapeutas",
  validateBody(createFisioterapeutaSchema),
  createFisioterapeuta
);

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
router.get("/fisioterapeutas", getAllFisioterapeutas);

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
router.get(
  "/fisioterapeutas/:id",
  validateParams(idParamSchema),
  getFisioterapeutaById
);

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
router.put(
  "/fisioterapeutas/:id",
  validateParams(idParamSchema),
  validateBody(updateFisioterapeutaSchema),
  updateFisioterapeuta
);

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
router.delete(
  "/fisioterapeutas/:id",
  validateParams(idParamSchema),
  deleteFisioterapeuta
);

export default router;
