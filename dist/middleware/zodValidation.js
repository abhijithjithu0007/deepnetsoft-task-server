"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = validateData;
const zod_1 = require("zod");
const customError_1 = require("../utils/errors/customError");
function validateData(schema) {
    return (req, _res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                throw new customError_1.CustomError(`Invalid data, ${error.errors[0].path}: ${error.errors[0].message}`, 400);
            }
            throw new customError_1.CustomError("Error when validating data", 400);
        }
    };
}
