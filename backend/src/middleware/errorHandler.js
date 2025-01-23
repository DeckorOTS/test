// errorHandler.js

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // Log the error
    console.error(err);

    // Send error response
    res.status(statusCode).json({
        status: 'error',
        statusCode: statusCode,
        message: message
    });
};

module.exports = errorHandler;