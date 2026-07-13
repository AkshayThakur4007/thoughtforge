import express from "express";
import healthRouter from "./routes/health.routes";
import authRouter from "./routes/auth.routes";
import { errorMiddleware } from "./middleware/error.middleware";

const app = express();

app.use(express.json());

app.use("/api/v1", healthRouter);
app.use("/api/v1/auth", authRouter);

app.use(errorMiddleware);

export default app;
