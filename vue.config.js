module.exports = {
  devServer: {
    proxy: {
      '/api': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
        // target: process.env.VUE_APP_API_BASE_URL,
        target: 'http://10.252.187.9:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}