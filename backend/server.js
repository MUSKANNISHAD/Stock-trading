import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3000;

try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
} catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
}