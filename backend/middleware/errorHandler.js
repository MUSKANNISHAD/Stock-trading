// Express 5 forwards rejected async handlers here automatically,
// so controllers don't need try/catch or an asyncHandler wrapper.
export const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        message: status === 500 ? "Internal server error" : err.message,
        error: err.message
    });
};