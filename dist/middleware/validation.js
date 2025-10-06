"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = exports.validateParams = exports.validateBody = void 0;
const zod_1 = require("zod");
// Middleware para validar o body da requisição
const validateBody = (schema) => {
    return (req, res, next) => {
        try {
            const validatedData = schema.parse(req.body);
            req.body = validatedData;
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return res.status(400).json({
                    message: "Dados de entrada inválidos",
                    errors: error.issues.map((err) => ({
                        campo: err.path.join("."),
                        mensagem: err.message,
                    })),
                });
            }
            next(error);
        }
    };
};
exports.validateBody = validateBody;
// Middleware para validar parâmetros da URL
const validateParams = (schema) => {
    return (req, res, next) => {
        try {
            const validatedParams = schema.parse(req.params);
            req.params = validatedParams;
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return res.status(400).json({
                    message: "Parâmetros inválidos",
                    errors: error.issues.map((err) => ({
                        campo: err.path.join("."),
                        mensagem: err.message,
                    })),
                });
            }
            next(error);
        }
    };
};
exports.validateParams = validateParams;
// Middleware para validar query parameters
const validateQuery = (schema) => {
    return (req, res, next) => {
        try {
            const validatedQuery = schema.parse(req.query);
            req.query = validatedQuery;
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return res.status(400).json({
                    message: "Parâmetros de consulta inválidos",
                    errors: error.issues.map((err) => ({
                        campo: err.path.join("."),
                        mensagem: err.message,
                    })),
                });
            }
            next(error);
        }
    };
};
exports.validateQuery = validateQuery;
