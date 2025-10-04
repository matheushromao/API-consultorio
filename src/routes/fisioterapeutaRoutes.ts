import { Router } from "express";
import {
  createFisioterapeuta,
  getAllFisioterapeuta,
  getFisioterapeutaById,
  updateFisioterapeuta,
  deleteFisioterapeuta,
} from "../controllers/fisioterapeutaController";

const router = Router();

export default router;
