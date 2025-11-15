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
exports.deleteFisioterapeuta = exports.updateFisioterapeuta = exports.getFisioterapeutaById = exports.getAllFisioterapeutas = exports.createFisioterapeuta = void 0;
const fisioterapeutaService = __importStar(require("../services/fisioterapeutaService"));
const createFisioterapeuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fisioterapeuta = yield fisioterapeutaService.create(req.body);
        return res.status(201).json(fisioterapeuta);
    }
    catch (error) {
        if (error.code === "P2002")
            return res
                .status(409)
                .json({ message: `Campo único já existe: ${error.meta.target}` });
        return res.status(500).json({ message: error.message });
    }
});
exports.createFisioterapeuta = createFisioterapeuta;
const getAllFisioterapeutas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fisioterapeutas = yield fisioterapeutaService.getAll();
        return res.json(fisioterapeutas);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getAllFisioterapeutas = getAllFisioterapeutas;
const getFisioterapeutaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fisioterapeuta = yield fisioterapeutaService.getById(Number(req.params.id));
        if (!fisioterapeuta)
            return res
                .status(404)
                .json({ message: "Fisioterapeuta não encontrado(a)." });
        return res.json(fisioterapeuta);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getFisioterapeutaById = getFisioterapeutaById;
const updateFisioterapeuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fisioterapeuta = yield fisioterapeutaService.update(Number(req.params.id), req.body);
        return res.status(200).json(fisioterapeuta);
    }
    catch (error) {
        if (error.code === "P2025")
            return res
                .status(404)
                .json({ message: "Fisioterapeuta não encontrado(a)." });
        if (error.code === "P2002")
            return res.status(409).json({ message: "Campo único já existe!" });
        return res.status(500).json({ message: error.message });
    }
});
exports.updateFisioterapeuta = updateFisioterapeuta;
const deleteFisioterapeuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fisioterapeutaService.remove(Number(req.params.id));
        return res
            .status(200)
            .json({ message: "Fisioterapeuta deletado(a) com sucesso." });
    }
    catch (error) {
        if (error.code === "P2025")
            return res
                .status(404)
                .json({ message: "Fisioterapeuta não encontrado(a)." });
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteFisioterapeuta = deleteFisioterapeuta;
