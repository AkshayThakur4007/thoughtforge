import express from "express";
import healthRouter from "./routes/health.routes";
import authRouter from "./routes/auth.routes";
import { errorMiddleware } from "./middleware/error.middleware";
import cors from "cors";
import { corsOptions } from "./config/cors";

import cookieParser from "cookie-parser";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", healthRouter);
app.use("/api/v1/auth", authRouter);

app.use(errorMiddleware);

export default app;
