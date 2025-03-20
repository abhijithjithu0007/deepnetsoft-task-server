"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const menuRoutes_1 = __importDefault(require("./routes/menuRoutes"));
const cronJobs_1 = __importDefault(require("./jobs/cronJobs"));
dotenv_1.default.config();
(0, cronJobs_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use(express_1.default.json());
app.use("/api/menu", menuRoutes_1.default);
app.use(globalErrorHandler_1.globalErrorHandler);
app.get("/", (req, res) => {
    res.send("Menu Management API is running!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
