import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import holdingsRoute from "./routes/holdingsRoute.js";
import positionsRoute from "./routes/positionsRoute.js";
import orderRoute from "./routes/orderRoute.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

const defaultOrigins = [
    "https://dashboard-theta-one-42.vercel.app",
    "https://stock-trading-nwil.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174"
];

const envOrigins = [
    process.env.FRONTEND_URL,
    process.env.DASHBOARD_URL,
    ...(process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : [])
].filter(Boolean).map((o) => o.trim());

const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error(`Origin ${origin} not allowed by CORS`));
        },
        credentials: true
    })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("hello world"));
app.get("/home", (req, res) => res.send("server is Listening"));

app.use(userRoutes);
app.use(holdingsRoute);
app.use(positionsRoute);
app.use(orderRoute);

app.use(errorHandler);

export default app;
