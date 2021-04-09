module.exports = {
    devServer: {
        port: 3000,
        proxy: {
            '/rest': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                secure:false
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
                changeOrigin: true,
                secure:false
            },
            '/auth' : {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                secure:false
            },
            '/login' : {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                secure:false
            },
            '/logout' : {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                secure:false
            },
            '/register' : {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                secure:false
            },
        }
    }
}