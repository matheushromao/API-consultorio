import { Router } from "express";
import {
  createConsulta,
  getAllConsulta,
  getConsultaById,
  updateConsulta,
  deleteConsulta,
} from "../controllers/consultaController";
import { validateBody, validateParams } from "../middleware/validation";
import {
  createConsultaSchema,
  updateConsultaSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

export default router;
