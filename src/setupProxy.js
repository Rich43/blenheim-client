const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'https://localhost:8000',
            changeOrigin: true,
            secure: false
        })
    );
};
