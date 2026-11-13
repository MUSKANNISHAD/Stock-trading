import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({
                message: "Authentication required",
                error: "AUTHENTICATION_ERROR"
            });
        }

        if (!process.env.JWT_SECRET) {
            console.error("FATAL: JWT_SECRET environment variable is not configured.");
            return res.status(500).json({
                message: "Internal server error",
                error: "INTERNAL_SERVER_ERROR"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token",
            error: "AUTHENTICATION_ERROR"
        });
    }
};
