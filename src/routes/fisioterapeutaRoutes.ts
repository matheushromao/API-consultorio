import { Router } from "express";
import {
  createFisioterapeuta,
  getAllFisioterapeuta,
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

export default router;
