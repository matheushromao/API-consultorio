import { Router } from "express";
import recepcionistaRoutes from "./recepcionistaRoutes";
import pacienteRoutes from "./pacienteRoutes";
import fisioterapeutaRoutes from "./fisioterapeutaRoutes";
import consultaRoutes from "./consultaRoutes";

const routes = Router();

routes.use(recepcionistaRoutes);
routes.use(pacienteRoutes);
routes.use(fisioterapeutaRoutes);
routes.use(consultaRoutes);

export default routes;
