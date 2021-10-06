const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/dbProducts", "/dbCompanies"], { target: "http://localhost:3004" })
  );
};
