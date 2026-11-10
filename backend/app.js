import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import holdingsRoute from "./routes/holdingsRoute.js";
import positionsRoute from "./routes/positionsRoute.js";
import orderRoute from "./routes/orderRoute.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(
    cors({
        origin: [
            "https://dashboard-theta-one-42.vercel.app",
            "https://stock-trading-nwil.vercel.app"
        ],
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