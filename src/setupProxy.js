const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/dbProducts", "/dbCompanies"], { target: "https://case-study-koray.herokuapp.com" })
  );
};
