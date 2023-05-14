const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({ message: err.message });
};

module.exports = {
  errorHandler,
};


//The errorMiddleware.js file defines a middleware function that handles errors and returns a standardized error response.