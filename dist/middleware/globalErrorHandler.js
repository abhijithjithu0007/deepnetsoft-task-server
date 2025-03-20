"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const customError_1 = require("../utils/errors/customError");
const handleErrors_1 = require("../utils/errors/handleErrors");
const errorResponse = (error, res) => {
    res.status(error.statusCode).json({
        status: error.status,
        statusCode: error.statusCode,
        message: error.message,
        errorCode: error.errorCode,
    });
};
const globalErrorHandler = (error, _req, res, _next) => {
    console.log(error);
    if (error instanceof customError_1.CustomError) {
        errorResponse(error, res);
        return;
    }
    if (error.code === 11000) {
        const duplicateKeyError = (0, handleErrors_1.duplicateKeyErrorHandler)(error);
        errorResponse(duplicateKeyError, res);
        return;
    }
    if (error.name === "ValidationError") {
        const validationError = (0, handleErrors_1.validationErrorHandler)(error);
        errorResponse(validationError, res);
        return;
    }
    res.status(500).json({
        status: "fail",
        statusCode: 500,
        message: (error === null || error === void 0 ? void 0 : error.message) || "Something went wrong",
    });
};
exports.globalErrorHandler = globalErrorHandler;
