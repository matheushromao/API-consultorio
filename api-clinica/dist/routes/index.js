"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recepcionistaRoutes_1 = __importDefault(require("./recepcionistaRoutes"));
const pacienteRoutes_1 = __importDefault(require("./pacienteRoutes"));
const fisioterapeutaRoutes_1 = __importDefault(
  require("./fisioterapeutaRoutes")
);
const consultaRoutes_1 = __importDefault(require("./consultaRoutes"));
const routes = (0, express_1.Router)();
routes.use(recepcionistaRoutes_1.default);
routes.use(pacienteRoutes_1.default);
routes.use(fisioterapeutaRoutes_1.default);
routes.use(consultaRoutes_1.default);
exports.default = routes;
