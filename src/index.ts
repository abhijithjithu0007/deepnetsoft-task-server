import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import menuRoutes from "./routes/menuRoutes";
import startCronJob from "./jobs/cronJobs";

dotenv.config();

startCronJob();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.use("/api/menu", menuRoutes);
app.use(globalErrorHandler);

app.get("/", (req, res) => {
  res.send("Menu Management API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
