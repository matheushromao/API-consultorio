import { Router } from "express";
import {
  createPaciente,
  getAllPacientes,
  getPacienteById,
  updatePaciente,
  deletePaciente,
} from "../controllers/pacienteControllers";
import { validateBody, validateParams } from "../middleware/validation";
import {
  createPacienteSchema,
  updatePacienteSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

export default router;
