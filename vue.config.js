module.exports = {
    devServer: {
        port: 3000,
        proxy: {
            '/rest': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            },
            '/auth' : {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            },
            '/api' : {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    }
}