import { Router } from "express";
import {
  createRecepcionista,
  getAllRecepcionistas,
  getRecepcionistaById,
  updateRecepcionista,
  deleteRecepcionista,
} from "../controllers/recepcionistaControllers";
import { validateBody, validateParams } from "../middleware/validation";
import {
  createRecepcionistaSchema,
  updateRecepcionistaSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

export default router;
