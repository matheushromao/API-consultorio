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
exports.deletePaciente = exports.updatePaciente = exports.getPacienteById = exports.getAllPacientes = exports.createPaciente = void 0;
const pacienteService = __importStar(require("../services/pacienteService"));
const createPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPaciente = yield pacienteService.create(req.body);
        return res.status(201).json(newPaciente);
    }
    catch (error) {
        if (error.code === "P2002") {
            return res.status(409).json({ message: "Campo único já existe!" });
        }
        return res.status(500).json({ message: error.message });
    }
});
exports.createPaciente = createPaciente;
const getAllPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield pacienteService.getAll();
        return res.json(pacientes);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getAllPacientes = getAllPacientes;
const getPacienteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield pacienteService.getById(Number(req.params.id));
        if (!paciente)
            return res.status(404).json({ message: "Paciente não encontrado" });
        return res.json(paciente);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getPacienteById = getPacienteById;
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield pacienteService.update(Number(req.params.id), req.body);
        return res.status(200).json(paciente);
    }
    catch (error) {
        if (error.code === "P2025")
            return res.status(404).json({ message: "Paciente não encontrado" });
        return res.status(500).json({ message: error.message });
    }
});
exports.updatePaciente = updatePaciente;
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pacienteService.remove(Number(req.params.id));
        return res.status(200).json({ message: "Paciente deletado com sucesso" });
    }
    catch (error) {
        if (error.code === "P2025")
            return res.status(404).json({ message: "Paciente não encontrado" });
        return res.status(500).json({ message: error.message });
    }
});
exports.deletePaciente = deletePaciente;
