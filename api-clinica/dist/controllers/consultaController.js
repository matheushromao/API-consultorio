"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteConsulta = exports.updateConsulta = exports.getConsultaById = exports.getAllConsultas = exports.createConsulta = void 0;
const consultaService = __importStar(require("../services/consultaService"));
const createConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consulta = yield consultaService.create(req.body);
        return res.status(201).json(consulta);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
});
exports.createConsulta = createConsulta;
const getAllConsultas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consultas = yield consultaService.getAll();
        return res.json(consultas);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getAllConsultas = getAllConsultas;
const getConsultaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consulta = yield consultaService.getById(Number(req.params.id));
        if (!consulta)
            return res.status(404).json({ message: "Consulta não encontrada." });
        return res.json(consulta);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getConsultaById = getConsultaById;
const updateConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consulta = yield consultaService.update(Number(req.params.id), req.body);
        return res.status(200).json(consulta);
    }
    catch (error) {
        if (error.code === "P2025")
            return res.status(404).json({ message: "Consulta não encontrada." });
        return res.status(500).json({ message: error.message });
    }
});
exports.updateConsulta = updateConsulta;
const deleteConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield consultaService.remove(Number(req.params.id));
        return res.status(200).json({ message: "Consulta deletada com sucesso." });
    }
    catch (error) {
        if (error.code === "P2025")
            return res.status(404).json({ message: "Consulta não encontrada." });
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteConsulta = deleteConsulta;
