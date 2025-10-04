import { Router } from "express";
import {
  createConsulta,
  getAllConsulta,
  getConsultaById,
  updateConsulta,
  deleteConsulta,
} from "../controllers/consultaController";

const router = Router();

export default router;
