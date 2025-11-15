import { Router } from "express";
import recepcionistaRoutes from "./recepcionistaRoutes";
import pacienteRoutes from "./pacienteRoutes";
import fisioterapeutaRoutes from "./fisioterapeutaRoutes";
import consultaRoutes from "./consultaRoutes";
import autenticacaoRoutes from "./autenticacaoRoutes";

const routes = Router();

routes.use(recepcionistaRoutes);
routes.use(pacienteRoutes);
routes.use(fisioterapeutaRoutes);
routes.use(consultaRoutes);
routes.use(autenticacaoRoutes);

export default routes;
