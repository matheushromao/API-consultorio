import { Router } from "express";
import {
  createRecepcionista,
  getAllRecepcionistas,
  getRecepcionistaById,
  updateRecepcionista,
  deleteRecepcionista,
} from "../controllers/recepcionistaController";
import { validateBody, validateParams } from "../middleware/validation";
import {
  createRecepcionistaSchema,
  updateRecepcionistaSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Recepcionistas
 *   description: Gerenciamento de Recepcionistas
 */

/**
 * @swagger
 * /recepcionistas:
 * *   post:
 *     summary: criar novo recepcionista
 *     tags: [Recepcionistas]
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
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Recepcionista criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post(
  "/recepcionistas",
  validateBody(createRecepcionistaSchema),
  createRecepcionista
);

/**
 * @swagger
 * /secretarios:
 *   get:
 *     summary: Retorna todos os secretários cadastradpos no banco
 *     tags: [Secretarios]
 *     responses:
 *       200:
 *         description: Lista de secretários
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/secretarios", getAllRecepcionistas);

/**
 * @swagger
 * /recepcionista/{id}:
 *   get:
 *     summary: Retorna recepcionista pelo ID
 *     tags: [Recepcionistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Recepcionista encontrado
 *       404:
 *         description: Recepcionista não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get(
  "/recepcionista/:id",
  validateParams(idParamSchema),
  getRecepcionistaById
);

/**
 * @swagger
 * /recepcionistas/{id}:
 *   put:
 *     summary: Atualizar Recepcionista pelo ID
 *     tags: [Recepcionistas]
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
 *         description: Recepcionista atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Recepcionista não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put(
  "/recepcionista/:id",
  validateParams(idParamSchema),
  validateBody(updateRecepcionistaSchema),
  updateRecepcionista
);

/**
 * @swagger
 * /recepcionistas/{id}:
 *   delete:
 *     summary: Deletar um recepcionista pelo ID
 *     tags: [Recepcionista]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Recepcionista deletado com sucesso
 *       404:
 *         description: Recepcionista não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete(
  "/recepcionista/:id",
  validateParams(idParamSchema),
  deleteRecepcionista
);

export default router;
