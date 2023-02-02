const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1", {
      target: "i8A806.p.ssafy.io:8080",
      changeOrigin: true,
    })
  );
};