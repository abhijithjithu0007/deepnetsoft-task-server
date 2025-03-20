"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorHandler = exports.duplicateKeyErrorHandler = void 0;
const customError_1 = require("./customError");
const duplicateKeyErrorHandler = (err) => {
    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];
    return new customError_1.CustomError(`${value} already exists!`, 400);
};
exports.duplicateKeyErrorHandler = duplicateKeyErrorHandler;
const validationErrorHandler = (err) => {
    const errors = Object.values(err.errors).map((val) => val.message);
    const errorMessages = errors.join(". ");
    const msg = `Invalid input data: ${errorMessages}`;
    return new customError_1.CustomError(msg, 400);
};
exports.validationErrorHandler = validationErrorHandler;
