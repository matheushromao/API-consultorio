import { Router } from "express";
import { getRecepcionistaByLogin } from "../controllers/recepcionistaController";
import { validateBody } from "../middleware/validation";
import { loginRecepcionistaSchema } from "../schemas/validation";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Secretarios
 *   description: Gerenciamento de Secretários
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login de um recepcionista
 *     tags: [Recepcionistas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Paciente registrado no banco
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */

router.post(
  "/login",
  validateBody(loginRecepcionistaSchema),
  getRecepcionistaByLogin
);

export default router;
